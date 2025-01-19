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

  export interface Label {
    id: string;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
  }

  export interface Customer {
    id: string;
    name: string;
    email: string;
  }

  export interface Tier {
    id?: string;
    name?: string;
    slug?: string;
    active?: boolean;
    welcome_page_url?: string | null;
    visibility: string;
    trial_days: number;
    description: string | null;
    type: string;
    currency: string;
    monthly_price: number;
    yearly_price: number;
    created_at: string;
    updated_at: string;
    monthly_price_id: string | null;
    yearly_price_id: string | null;
    expiry_at: string | null;
  }

  export interface Price {
    id?: string;
    price_id?: string;
    nickname?: string | null;
    amount?: number;
    interval?: string;
    type?: string;
    currency?: string;
    tier?: Tier;
  }

  export interface Subscription {
    id: string;
    customer?: Customer;
    plan?: {
      id?: string;
      nickname?: string | null;
      amount?: number;
      interval?: string;
      currency?: string;
    };
    status?: string;
    start_date?: string;
    default_payment_card_last4?: string | null;
    cancel_at_period_end?: boolean;
    cancellation_reason?: string | null;
    current_period_end?: string;
    trial_start_at?: string | null;
    trial_end_at: string | null;
    price?: Price;
    tier?: Tier;
    offer?: string | null;
  }


  export interface EmailSuppression {
    suppressed?: boolean;
    info?: string | null;
  }

  export interface Member {
    errors: any;
    id?: string;
    uuid?: string;
    email?: string;
    name?: string | null;
    note?: string | null;
    geolocation?: any[];
    subscribed?: boolean;
    created_at?: string;
    updated_at?: string;
    labels?: (string | Label)[];
    subscriptions?: Subscription[];
    avatar_image?: string;
    comped?: boolean;
    email_count?: number;
    email_opened_count?: number;
    email_open_rate?: number | null;
    status?: string;
    last_seen_at?: string | null;
    unsubscribe_url?: string;
    email_suppression?: EmailSuppression;
    newsletters?: any[];
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

  export interface Tier {
    id: string;
    name: string;
    description: string | null;
    slug: string;
    active: boolean;
    type: string;
    welcome_page_url: string | null;
    created_at: string;
    updated_at: string;
    stripe_prices: any | null;
    monthly_price: any | null;
    yearly_price: any | null;
    benefits: any[];
    visibility: string;
  }

  export interface Newsletter {
    id: string;
    name: string;
    description: string | null;
    slug: string;
    sender_name: string | null;
    sender_email: string | null;
    sender_reply_to: string;
    status: string;
    visibility: string;
    subscribe_on_signup: boolean;
    sort_order: number;
    header_image: string | null;
    show_header_icon: boolean;
    show_header_title: boolean;
    title_font_category: string;
    title_alignment: string;
    show_feature_image: boolean;
    body_font_category: string;
    footer_content: string | null;
    show_badge: boolean;
    created_at: string;
    updated_at: string;
    show_header_name: boolean;
    uuid: string;
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
      edit(options: { id: string; labels: string[] }): Promise<Member>; // Allow Partial<Member> for flexibility
      add(data: Partial<Member>, options?: object): Promise<Member>;
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

    tiers: {
      browse(options?: object): Promise<Tier[]>;
      read(options: { id: string }): Promise<Tier>;
      edit(options: { id: string; data: Tier }): Promise<Tier>;
      add(options: Partial<Tier>): Promise<Tier>;
      delete(options: { id: string }): Promise<void>;
    }

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
