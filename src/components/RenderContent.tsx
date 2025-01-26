import React from 'react'

import rehypeReact from 'rehype-react'
import { unified } from 'unified'
import { jsx, jsxs } from 'react/jsx-runtime'
import { Node } from 'unist'
import ReactGist from 'react-gist'

import { NextLink } from '@/components/helpers/NextLink'
import { NextImage } from '@/components/helpers/NextImage'

const gist_regex = /https:\/\/gist.github.com\/\S+\/([a-f0-9]+)\.js/g

interface ScriptNodeProps {
  src: string
}

const options = {
  createElement: React.createElement,
  Fragment: React.Fragment,
  jsx,
  jsxs,
  passNode: true,
  components: {
    Link: (props: any) => <NextLink {...props} />,
    Image: (props: any) => <NextImage {...props} />,
    script: (props: ScriptNodeProps) => {
      const match = gist_regex.exec(props.src)
      if (match && match.length > 1) {
        return <ReactGist id={match[1]} />
      }
      return null
    },
  },
}

const renderAst = unified().use(rehypeReact as any, options)

interface RenderContentProps {
  htmlAst: Node | null
  isPreview?: boolean
}

interface CommentNode extends Node {
  type: `comment`
  value: string
}

interface ParentNode extends Node {
  children?: Node[]
}

const stripAfterMembersOnly = (node: Node): Node | null => {
  if (!node || typeof node !== `object` || !(`children` in node)) return node

  const children = (node as ParentNode).children || []
  const processedChildren: Node[] = []

  for (const child of children) {
    if (child.type === `comment` && (child as CommentNode).value === `members-only`) {
      break
    }
    if (`children` in child) {
      const processedChild = stripAfterMembersOnly(child)
      if (processedChild) {
        processedChildren.push(processedChild)
      }
    } else {
      processedChildren.push(child)
    }
  }

  return { ...(node as ParentNode), children: processedChildren } as ParentNode
}

export const RenderContent = ({ htmlAst, isPreview = false }: RenderContentProps) => {
  if (!htmlAst) return null
  const processedAst = isPreview ? stripAfterMembersOnly(htmlAst) : htmlAst
  return <>{renderAst.stringify(processedAst)}</>
}

//<div className="post-content load-external-scripts">{renderAst.stringify(htmlAst)}</div>
