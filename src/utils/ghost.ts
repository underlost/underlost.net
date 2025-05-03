import type { Page, Post, Tag, Author } from "@ts-ghost/content-api";
import { TSGhostContentAPI } from "@ts-ghost/content-api";

const ghostUrl = import.meta.env.CMS_GHOST_API_URL;
const ghostApiKey = import.meta.env.CMS_GHOST_API_KEY;

export const getSettings = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const res = await api.settings.fetch();
  if (res.success) {
    return res.data;
  }
  return null;
};
export type NonNullable<T> = T extends null | undefined ? never : T;

export type Settings = NonNullable<Awaited<ReturnType<typeof getSettings>>>;

export const getAllAuthors = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const authors: Author[] = [];
  let cursor = await api.authors
    .browse(
      {
        order: `count.posts DESC`,
      }
    )
    .include({
      "count.posts": true,
    })
    .paginate();
  if (cursor.current.success) authors.push(...(cursor.current.data as Author[]));
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) authors.push(...cursor.current.data);
  }
  return authors;
};

export const getPostsbyAuthor = async (props?: {slug: string}): Promise<Post[]> => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, 'v5.0');
  const result = await api.posts
    .browse({
      filter: `authors.slug:${props?.slug}`,
      limit: 6,
    })
    .include({
      authors: true,
      tags: true,
    })
    .fetch();

  if (!result.success) {
    throw new Error(result.errors.map((e) => e.message).join(', '));
  }
  return result.data;
};

// Used for building all static pages
export const getAllPosts = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const posts: Post[] = [];
  let cursor = await api.posts
    .browse({
      filter: `tags:[hash-blog,hash-linked]`,
      order: `published_at DESC`,
    })
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) posts.push(...(cursor.current.data as Post[]));
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) posts.push(...cursor.current.data);
  }
  return posts;
};

export const getPosts = async (props?: { limit?: number; page?: number }): Promise<Post[]> => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, 'v5.0');
  const limit = props?.limit ?? 12;
  const page = props?.page ?? 1;
  const result = await api.posts
    .browse({
      filter: 'tags:hash-blog',
      order: 'published_at DESC',
      limit,
      page,
    })
    .include({
      authors: true,
      tags: true,
    })
    .fetch();

  if (!result.success) {
    throw new Error(result.errors.map((e) => e.message).join(', '));
  }
  return result.data;
};

export const getAllPages = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const pages: Page[] = [];
  let cursor = await api.pages
    .browse({
      filter: `tags:hash-page`,
    })
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) pages.push(...cursor.current.data);
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) pages.push(...cursor.current.data);
  }
  return pages;
};

// Projects
export const getAllProjects = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const posts: Post[] = [];
  let cursor = await api.posts
    .browse({
      filter: `tags:hash-projects`,
      order: `published_at DESC`,
    })
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) posts.push(...cursor.current.data);
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) posts.push(...cursor.current.data);
  }
  return posts;
};

export const getCurrentProjectPosts = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const posts: Post[] = [];
  let cursor = await api.posts
    .browse({
      filter: `tags:hash-current-projects`,
      order: `published_at DESC`,
    })
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) posts.push(...cursor.current.data);
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) posts.push(...cursor.current.data);
  }
  return posts;
};

export const getOldProjectPosts = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const posts: Post[] = [];
  let cursor = await api.posts
    .browse({
      filter: `tags:hash-old-projects`,
      order: `published_at DESC`,
    })
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) posts.push(...cursor.current.data);
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) posts.push(...cursor.current.data);
  }
  return posts;
};

//Get Poprtfio Pages
export const getAllPortfolioPages = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const pages: Page[] = [];
  let cursor = await api.pages
    .browse({
      filter: `tags:hash-portfolio`,
    })
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) pages.push(...cursor.current.data);
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) pages.push(...cursor.current.data);
  }
  return pages;
};

//Get Consulting Pages
export const getAllConsultingPages = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const pages: Page[] = [];
  let cursor = await api.pages
    .browse({
      filter: `tags:hash-consulting`,
    })
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) pages.push(...cursor.current.data);
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) pages.push(...cursor.current.data);
  }
  return pages;
};

export const getFeaturedPosts = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const results = await api.posts
    .browse({
      filter: `featured:true+tags:hash-blog`,
      limit: 6,
    })
    .include({
      authors: true,
      tags: true,
    })
    .fetch();
  if (!results.success) {
    throw new Error(results.errors.map((e) => e.message).join(`, `));
  }
  return {
    posts: results.data,
    meta: results.meta,
  };
};

export const getNoteworthyPosts = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const results = await api.posts
    .browse({
      filter: `tags:hash-noteworthy`,
      limit: 12,
    })
    .include({
      authors: true,
      tags: true,
    })
    .fetch();
  if (!results.success) {
    throw new Error(results.errors.map((e) => e.message).join(`, `));
  }
  return {
    posts: results.data,
    meta: results.meta,
  };
};

export const getAsidePosts = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const results = await api.posts
    .browse({
      filter: `tags:hash-aside`,
      limit: 12,
    })
    .include({
      authors: true,
      tags: true,
    })
    .fetch();
  if (!results.success) {
    throw new Error(results.errors.map((e) => e.message).join(`, `));
  }
  return {
    posts: results.data,
    meta: results.meta,
  };
};

export const getLinkedPosts = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const results = await api.posts
    .browse({
      filter: `tags:hash-linked`,
      limit: 12,
    })
    .include({
      authors: true,
      tags: true,
    })
    .fetch();
  if (!results.success) {
    throw new Error(results.errors.map((e) => e.message).join(`, `));
  }
  return {
    posts: results.data,
    meta: results.meta,
  };
};

export const getPopularPosts = async (props?: { limit?: number; page?: number }): Promise<Post[]> => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, 'v5.0');
  const limit = props?.limit ?? 6;
  const page = props?.page ?? 1;
  const result = await api.posts
    .browse({
      filter: 'tags:hash-popular',
      order: 'published_at DESC',
      limit,
      page,
    })
    .include({
      authors: true,
      tags: true,
    })
    .fetch();

  if (!result.success) {
    throw new Error(result.errors.map((e) => e.message).join(', '));
  }
  return result.data;
};

export const getBoringPosts = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const results = await api.posts
    .browse({
      filter: `tags:hash-boredable`,
      limit: 6,
    })
    .include({
      authors: true,
      tags: true,
    })
    .fetch();
  if (!results.success) {
    throw new Error(results.errors.map((e) => e.message).join(`, `));
  }
  return {
    posts: results.data,
    meta: results.meta,
  };
};

// Get page based on slug
export const getPage = async (slug: string) => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const res = await api.pages
    .read({
      slug,
    })
    .include({
      authors: true,
      tags: true,
    })
    .fetch();
  if (res.success) {
    return res.data;
  }
  return null;
};

export const getAllTags = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const tags: Tag[] = [];
  let cursor = await api.tags
    .browse({
      filter: `visibility:public`,
      order: `count.posts DESC`,
    })
    .include({
      "count.posts": true,
    })
    .paginate();
  if (cursor.current.success) tags.push(...cursor.current.data);
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) tags.push(...cursor.current.data);
  }
  return tags;
};

export const getPostsByTag = async (slug: string) => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const posts: Post[] = [];
  let cursor = await api.posts
    .browse({
      filter: `tags.slug:${slug}`,
    })
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) posts.push(...cursor.current.data);
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) posts.push(...cursor.current.data);
  }
  return posts;
}; 

export const getPagesByTag = async (slug: string) => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const posts: Post[] = [];
  let cursor = await api.pages
    .browse({
      filter: `tags.slug:${slug}`,
    })
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) posts.push(...cursor.current.data);
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) posts.push(...cursor.current.data);
  }
  return posts;
}; 

export const getAllTwitterPosts = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const posts: Post[] = [];
  let cursor = await api.posts
    .browse({
      filter: `tags:hash-twitter`,
      order: `published_at DESC`,
    })
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) posts.push(...(cursor.current.data as Post[]));
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) posts.push(...cursor.current.data);
  }
  return posts;
};

export const getAllPhotoPosts = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, `v5.0`);
  const posts: Post[] = [];
  let cursor = await api.posts
    .browse({
      filter: `tags:hash-photos`,
      order: `published_at DESC`,
    })
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) posts.push(...(cursor.current.data as Post[]));
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) posts.push(...cursor.current.data);
  }
  return posts;
};