import Link from 'next/link'
import { Node } from 'unist'

import { RenderContent } from '../RenderContent'

interface PropertyProps {
  href?: string
}

interface LinkNode extends Node {
  children: Node[]
  properties: PropertyProps
}

interface NextLinkProps {
  node?: LinkNode // Ensure you are passing the node prop accordingly
}

export const NextLink = ({ node }: NextLinkProps) => {
  if (!node) return null
  const { href } = node.properties
  const [child] = node.children

  return (
    <>
      {!!href && (
        <Link href={href}>
          {/* Ensure RenderContent is adjusted if necessary to accept the new structure */}
          <RenderContent htmlAst={child} />
        </Link>
      )}
    </>
  )
}
