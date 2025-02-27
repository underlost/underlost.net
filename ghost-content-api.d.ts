
declare module "@tryghost/content-api" {

    export type ArrayOrValue<T> = T | T[];
    export type Nullable<T> = T | null;

    export interface Pagination {
        page: number;
        limit: number;
        pages: number;
        total: number;
        next: Nullable<number>;
        prev: Nullable<number>;
    }

    export interface Identification {
        slug: string;
        id: string;
    }

    export interface Metadata {
        meta_title?: Nullable<string> | undefined;
        meta_description?: Nullable<string> | undefined;
    }

    export interface Excerpt {
        excerpt?: string | undefined;
        custom_excerpt?: string | undefined;
    }

    export interface CodeInjection {
        codeinjection_head?: Nullable<string> | undefined;
        codeinjection_foot?: Nullable<string> | undefined;
    }

    /** Metadata for Facebook */
    export interface Facebook {
        og_image?: Nullable<string> | undefined;
        og_title?: Nullable<string> | undefined;
        og_description?: Nullable<string> | undefined;
    }

    export interface Twitter {
        twitter_image?: Nullable<string> | undefined;
        twitter_title?: Nullable<string> | undefined;
        twitter_description?: Nullable<string> | undefined;
    }

    export interface SocialMedia extends Facebook, Twitter {}

    export interface Settings extends Metadata, CodeInjection, SocialMedia {
        title?: string | undefined;
        description?: string | undefined;
        logo?: string | undefined;
        icon?: string | undefined;
        cover_image?: string | undefined;
        facebook?: string | undefined;
        twitter?: string | undefined;
        lang?: string | undefined;
        timezone?: string | undefined;
        ghost_head?: Nullable<string> | undefined;
        ghost_foot?: Nullable<string> | undefined;
        navigation?:
            | Array<{
                label: string;
                url: string;
            }>
            | undefined;
        secondary_navigation?:
            | Array<{
                label: string;
                url: string;
            }>
            | undefined;
        url?: string | undefined;
    }

    export interface Author extends Identification, Metadata {
        name?: string | undefined;
        profile_image?: Nullable<string> | undefined;
        cover_image?: Nullable<string> | undefined;
        bio?: Nullable<string> | undefined;
        website?: Nullable<string> | undefined;
        location?: Nullable<string> | undefined;
        facebook?: Nullable<string> | undefined;
        twitter?: Nullable<string> | undefined;
        url?: Nullable<string> | undefined;
        count?:
            | {
                posts: number;
            }
            | undefined;
    }

    export interface Tier {
        uuid: string;
        name: string;
        description: string;
        monthly_price: number;
        yearly_price: number;
        benefits: string[];
    }

    export type TagVisibility = "public" | "internal";

    export interface Tag extends Identification, Metadata, SocialMedia {
        name?: string | undefined;
        description?: Nullable<string> | undefined;
        feature_image?: Nullable<string> | undefined;
        visibility?: TagVisibility | undefined;
        url?: string | undefined;
        canonical_url?: Nullable<string> | undefined;
        accent_color?: Nullable<string> | undefined;
        count?:
            | {
                posts: number;
            }
            | undefined;
    }

    export interface Newsletter {
        id: string;
        name: string;
        description: Nullable<string>;
        slug: string;
        sender_name: Nullable<string>;
        sender_email: Nullable<string>;
        sender_reply_to: string;
        status: string;
        visibility: string;
        subscribe_on_signup: boolean;
        sort_order: number;
        header_image: Nullable<string>;
        show_header_icon: boolean;
        show_header_title: boolean;
        title_font_category: string;
        title_alignment: string;
        show_feature_image: boolean;
        body_font_category: string;
        footer_content: Nullable<string>;
        show_badge: boolean;
        created_at: string;
        updated_at: string;
        show_header_name: boolean;
        uuid: string;
    }

    export interface Tier {
        id: string;
        name: string;
        description: Nullable<string>;
        slug: string;
        active: boolean;
        type: string;
        welcome_page_url: Nullable<string>;
        created_at: string;
        updated_at: string;
        stripe_prices: any | null;
        monthly_price: any | null;
        yearly_price: any | null;
        benefits: any[];
        visibility: string;
    }

    export interface PostOrPage extends Identification, Excerpt, CodeInjection, Metadata, SocialMedia {
        // Identification
        uuid?: string | undefined;
        comment_id?: string | undefined;
        featured?: boolean | undefined;

        // Post or Page
        title?: string | undefined;
        html?: Nullable<string> | undefined;
        plaintext?: Nullable<string> | undefined;

        // Image
        feature_image?: Nullable<string> | undefined;
        feature_image_alt?: Nullable<string> | undefined;
        feature_image_caption?: Nullable<string> | undefined;

        // Dates
        created_at?: string | undefined;
        updated_at?: Nullable<string> | undefined;
        published_at?: Nullable<string> | undefined;

        // Custom Template for posts and pages
        custom_template?: Nullable<string> | undefined;

        // Post or Page
        page?: boolean | undefined;

        // Reading time
        reading_time?: number | undefined;

        // Tags - Only shown when using Include param
        tags?: Tag[] | undefined;
        primary_tag?: Nullable<Tag> | undefined;

        // Authors - Only shown when using Include Param
        authors?: Author[] | undefined;
        primary_author?: Nullable<Author> | undefined;

        url?: string | undefined;
        canonical_url?: Nullable<string> | undefined;
    }

    export type GhostData = PostOrPage | Author | Tag | Settings;

    export type IncludeParam = "authors" | "tags" | "count.posts" | "monthly_price" | "yearly_price" | "benefits";

    export type FieldParam = string;

    export type FormatParam = "html" | "plaintext";

    export type FilterParam = string;

    export type LimitParam = number | string;

    export type PageParam = number;

    export type OrderParam = string;

    export interface Params {
        include?: ArrayOrValue<IncludeParam> | undefined;
        fields?: ArrayOrValue<FieldParam> | undefined;
        formats?: ArrayOrValue<FormatParam> | undefined;
        filter?: ArrayOrValue<FilterParam> | undefined;
        limit?: ArrayOrValue<LimitParam> | undefined;
        page?: ArrayOrValue<PageParam> | undefined;
        order?: ArrayOrValue<OrderParam> | undefined;
    }

    export interface BrowseFunction<T> {
        (options?: Params, memberToken?: Nullable<string>): Promise<T>;
    }

    export interface ReadFunction<T> {
        (
            data: { id: Nullable<string> } | { slug: Nullable<string> },
            options?: Params,
            memberToken?: Nullable<string>,
        ): Promise<T>;
    }

    interface BrowseResults<T> extends Array<T> {
        meta: { pagination: Pagination };
    }

    export interface PostsOrPages extends BrowseResults<PostOrPage> {}

    export interface Authors extends BrowseResults<Author> {}

    export interface Tags extends BrowseResults<Tag> {}

    export interface Tiers extends BrowseResults<Tier> {
        monthly_price: number;
        yearly_price: number;
        benefits: string[];
        type: string;
        id: string;
        name: string;
    }

    export interface Newsletters extends BrowseResults<Newsletter> {}

    export interface SettingsResponse extends Settings {
        meta: any;
    }

    export interface GhostError {
        errors: Array<{
            message: string;
            errorType: string;
        }>;
    }

    export interface MakeRequestOptions {
        url: string;
        method: string;
        params: {
            [key: string]: any;
        };
        headers: {
            [key: string]: any;
        };
    }

    export interface GhostContentAPIOptions {
        url: string;
        /**
         * Version of GhostContentAPI
         * Should be in 'v{major}.{minor}' format.
         *
         * Deprecated options: 'v2', 'v3', 'v4', 'v5', 'canary'
         */
        version: string;
        key: string;
        /** @deprecated since version v2 */
        host?: string | undefined;
        /** @default "ghost" */
        ghostPath?: string | undefined;
        makeRequest?: (
            options: MakeRequestOptions,
        ) => Promise<any>;
    }

    export interface GhostAPI {
        posts: {
            browse: BrowseFunction<PostsOrPages>;
            read: ReadFunction<PostOrPage>;
        };
        authors: {
            browse: BrowseFunction<Authors>;
            read: ReadFunction<Author>;
        };
        tags: {
            browse: BrowseFunction<Tags>;
            read: ReadFunction<Tag>;
        };
        tiers: {
            browse: BrowseFunction<Tiers>;
        };
        newsletters: {
            browse: BrowseFunction<Newsletters>;
        };
        pages: {
            browse: BrowseFunction<PostsOrPages>;
            read: ReadFunction<PostOrPage>;
        };
        settings: {
            browse: BrowseFunction<SettingsResponse>;
        };
    }

    declare var GhostContentAPI: {
        (options: GhostContentAPIOptions): GhostAPI;
        new(options: GhostContentAPIOptions): GhostAPI;
    };

    export default GhostContentAPI;
}