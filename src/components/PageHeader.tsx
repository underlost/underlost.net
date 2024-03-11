import React from 'react'

interface PageHeaderProps {
  title?: string
  excerpt?: string
}

export const PageHeader = ({ title, excerpt }: PageHeaderProps) => (
  <header className="post-full-header text-center mb-8">
    <h1 className="post-full-title text-wide text-6xl">{title}</h1>
    {excerpt && <p className="post-full-custom-excerpt text-xl">{excerpt}</p>}
  </header>
)
