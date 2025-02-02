import type { BlogPost } from "./data"

export function filterPosts(posts: BlogPost[], search: string): BlogPost[] {
  const searchLower = search.toLowerCase()
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchLower) ||
      post.description.toLowerCase().includes(searchLower) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchLower)),
  )
}

