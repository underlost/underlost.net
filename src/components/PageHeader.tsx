import React from 'react'

interface PageHeaderProps {
  title?: string
  excerpt?: string
  size?: string
}

export const PageHeader = ({ title = ``, excerpt, size }: PageHeaderProps) => {
  let h1Class = `h1`
  if (size === `small`) {
    h1Class = `h2`
  } else if (size === `large` && title.length < 20) {
    h1Class = `h1-xl`
  }
  return (
    <header className="page-full-header text-center mb-8">
      <h1 className={h1Class}>{title}</h1>
      {excerpt && <p className="post-full-custom-excerpt text-xl">{excerpt}</p>}
    </header>
  )
}
