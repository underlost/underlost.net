import Link from 'next/link'
import { Node } from 'unist'

import { RenderContent } from '../RenderContent'

const domains = [`underlost.xyz`, `underlost.net`, `alifewellplayed.com`]

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

  // Check if the href starts with a slash or if the url contains a whitelisted domain
  const isDomainWhitelisted = href ? domains.some((domain) => href.includes(domain)) || href.startsWith(`/`) : false
  
  return (
    <>
      {!!href && (
        isDomainWhitelisted ? (
          <Link href={href}>
            {/* Ensure RenderContent is adjusted if necessary to accept the new structure */}
            <RenderContent htmlAst={child} />
          </Link>
        ) : (
          <a href={href}>
            <RenderContent htmlAst={child} />
          </a>
        )
      )}
    </>
  )
}
