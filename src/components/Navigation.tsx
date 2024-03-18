import Link from 'next/link'
import { NavItem } from '../lib/ghost'

/**
 * Navigation component
 *
 * The Navigation component takes an array of your Ghost
 * navigation property that is fetched from the settings.
 * It differentiates between absolute (external) and relative link (internal).
 * You can pass it a custom class for your own styles, but it will always fallback
 * to a `site-nav-item` class.
 *
 */

interface NavigationProps {
  data?: NavItem[]
  navClass?: string
  className?: string
}

export const Navigation = ({ data, navClass = ``, className }: NavigationProps) => {
  const items: JSX.Element[] = [] // Use JSX.Element[] for an array of JSX elements
  data?.forEach((navItem, i) => {
    // Prefer forEach for operations that don't return a value
    //const isExternalLink = /^\s?http(s?)/gi.test(navItem.url)
    const isInternalLink = navItem.url.match(/underlost.net/g)

    const itemClass = `nav-${navItem.label.toLowerCase()} nav-item`
    const element = (
      <li key={i} className={itemClass} role="menuitem">
        {isInternalLink ? (
          <div className={navClass}>
            <Link href={navItem.url}>{navItem.label}</Link>
          </div>
        ) : (
          <a className={navClass} href={navItem.url} target="_blank" rel="noopener noreferrer">
            {navItem.label}
          </a>
        )}
      </li>
    )

    items.push(element)
  })

  return (
    <ul className={`nav ${className}`} role="menu">
      {items}
    </ul>
  )
}
