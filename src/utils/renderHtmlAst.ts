import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypePrism from 'rehype-prism-plus'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import type { Node, Parent } from 'unist'
import type { Root } from 'hast'

export function stripAfterMembersOnly(node: Node): Node {
  if (!node || typeof node !== 'object' || !('children' in node)) return node

  const children = (node as Parent).children || []
  const filtered: Node[] = []

  for (const child of children) {
    if (child.type === 'comment' && 'value' in child && child.value === 'members-only') break

    if ('children' in child) {
      const stripped = stripAfterMembersOnly(child)
      if (stripped) filtered.push(stripped)
    } else {
      filtered.push(child)
    }
  }

  return { ...(node as Parent), children: filtered } as Parent

}

function rewriteSecureUrls() {
  return (tree: Node) => {
    visit(tree, 'element', (node: any) => {
      if (node.properties) {
        const props = node.properties;

        ['href', 'src'].forEach((attr) => {
          const val = props[attr];
          if (typeof val === 'string' && val.startsWith('https://secure.underlost.net/')) {
            props[attr] = val.replace('https://secure.underlost.net/', '/');
          }
        });
      }
    });
  };
}

export async function renderHtmlFromAst(html: string, isMembersOnly = false): Promise<string> {
  const processor = unified().use(rehypeParse, { fragment: true })
  const ast = processor.parse(html)

  const processedAst = isMembersOnly ? stripAfterMembersOnly(ast) : ast

  const result = await unified()
    .use(rewriteSecureUrls)
    .use(rehypePrism)
    .use(rehypeStringify)
    .run(processedAst as Root)

  return unified().use(rehypeStringify).stringify(result)
}
