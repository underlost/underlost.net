// Post utils
export function getPostsFromQuery(posts) {
  if (posts) {
    return posts.edges
      .map(edge => edge.node)
      .map(node =>
        Object.assign(
          {},
          {
            title: node.title,
            slug: node.slug,
            excerpt: node.excerpt,
            tags: node.tags,
          }
        )
      )
  }

  return []
}
