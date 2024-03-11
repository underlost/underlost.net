declare module "@tryghost/admin-api" {
  export interface ClientOptions {
    url: string;
    key: string;
    version?: string;
  }

  export interface Page {
    id: string;
    title: string;
    slug: string;
    html: string;
    markdown: string;
    feature_image: string;
    featured: boolean;
    page: boolean;
    status: string;
    language: string;
    visibility: string;
    meta_title: string;
    meta_description: string;
    author_id: string;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    published_at: string;
    published_by: string;
  }

  export interface Post {
    id: string;
    title: string;
    slug: string;
    html: string;
    markdown: string;
    feature_image: string;
    featured: boolean;
    page: boolean;
    status: string;
    language: string;
    visibility: string;
    meta_title: string;
    meta_description: string;
    author_id: string;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    published_at: string;
    published_by: string;
  }

  export interface Member {
    errors: any;
    error: any;
    id: string;
    name: string;
    email: string;
    status: string;
    note: string;
  }

  export interface Tag {
    id: string;
    name: string;
    slug: string;
    description: string;
    feature_image: string;
    visibility: string;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
  }

  export interface Webhook {
    id: string;
    event: string;
    target_url: string;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
  }

  export interface User {
    id: string;
    name: string;
    slug: string;
    profile_image: string;
    cover_image: string;
    bio: string;
    website: string;
    location: string;
    status: string;
    visibility: string;
    meta_title: string;
    meta_description: string;
    last_login: string;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
  }

  export interface Newsletter {
    id: string;
    name: string;
    slug: string;
    status: string;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
  }

  export interface Image {
    id: string;
    title: string;
    slug: string;
    type: string;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    published_at: string;
    published_by: string;
  }

  export interface Media {
    id: string;
    title: string;
    slug: string;
    type: string;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    published_at: string;
    published_by: string;
  }

  export interface File {
    id: string;
    title: string;
    slug: string;
    type: string;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    published_at: string;
    published_by: string;
  }

  export interface Config {
    id: string;
    key: string;
    value: string;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
  }

  export interface Site {
    id: string;
    name: string;
    description: string;
    logo: string;
    icon: string;
    cover_image: string;
    facebook: string;
    twitter: string;
    lang: string;
    timezone: string;
    navigation: string[];
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
  }

  export interface Theme {
    id: string;
    name: string;
    package: {
      name: string;
      version: string;
    };
    active: boolean;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
  }

  export default class Client {
    constructor(options: ClientOptions);

    pages: {
      browse(options?: object): Promise<Page[]>;
      read(options: { id: string }): Promise<Page>;
      edit(options: { id: string; data: Page }): Promise<Page>;
      add(options: Partial<Page>): Promise<Page>;
      delete(options: { id: string }): Promise<void>;
    };

    posts: {
      browse(options?: object): Promise<Post[]>;
      read(options: { id: string }): Promise<Post>;
      edit(options: { id: string; data: Post }): Promise<Post>;
      add(options: Partial<Post>): Promise<Post>;
      delete(options: { id: string }): Promise<void>;
    };

    members: {
      browse(options?: object): Promise<Member[]>;
      read(options: { id: string }): Promise<Member>;
      edit(options: { id: string; data: Member }): Promise<Member>;
      add(options: Partial<Member>): Promise<Member>;
      delete(options: { id: string }): Promise<void>;
    };

    tags: {
      browse(options?: object): Promise<Tag[]>;
      read(options: { id: string }): Promise<Tag>;
      edit(options: { id: string; data: Tag }): Promise<Tag>;
      add(options: Partial<Tag>): Promise<Tag>;
      delete(options: { id: string }): Promise<void>;
    };

    webhooks: {
      browse(options?: object): Promise<Webhook[]>;
      read(options: { id: string }): Promise<Webhook>;
      edit(options: { id: string; data: Webhook }): Promise<Webhook>;
      add(options: Partial<Webhook>): Promise<Webhook>;
      delete(options: { id: string }): Promise<void>;
    };

    users: {
      browse(options?: object): Promise<User[]>;
      read(options: { id: string }): Promise<User>;
      edit(options: { id: string; data: User }): Promise<User>;
      add(options: Partial<User>): Promise<User>;
      delete(options: { id: string }): Promise<void>;
    };

    newsletters: {
      browse(options?: object): Promise<Newsletter[]>;
      read(options: { id: string }): Promise<Newsletter>;
      edit(options: { id: string; data: Newsletter }): Promise<Newsletter>;
      add(options: Partial<Newsletter>): Promise<Newsletter>;
      delete(options: { id: string }): Promise<void>;
    };

    images: {
      upload(options: { file: any }): Promise<Image>;
    };

    media: {
      upload(options: { file: any }): Promise<Media>;
    };

    files: {
      upload(options: { file: any }): Promise<File>;
    };

    config: {
      read(options: { id: string }): Promise<Config>;
    };

    site: {
      read(options: { id: string }): Promise<Site>;
    };

    themes: {
      upload(options: { file: any }): Promise<Theme>;
      activate(options: { id: string }): Promise<Theme>;
    };
  }
}
