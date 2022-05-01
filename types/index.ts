export interface Photo {
    id: string;
    created_at: string;
    updated_at: string;
    promoted_at: string;
    width: number;
    height: number;
    color: string | null;
    blur_hash: string;
    description: string | null;
    alt_description: string | null;
    links: { self: string; html: string; download: string; download_location: string };
    urls: { regular: string; raw: string; small: string; full: string; thumb: string; small_s3: string };
    categories: string[];
    liked_by_user: boolean;
    current_user_collections: string[];
    sponsorship: string | null;
    topic_submissions: Record<string, unknown>;
    exif: Record<string, unknown>;
    location: {
        title: string | null;
        name: string | null;
        city: string | null;
        country: string | null;
        position: {
            latitude: number | null;
            longitude: number | null;
        };
    };
    views: number;
    downloads: number;
    likes: number;
    user: {
        id: string;
        updated_at: string;
        username: string;
        name: string;
        first_name: string;
        last_name: string | null;
        twitter_username: string | null;
        portfolio_url: string | null;
        bio: string | null;
        location: string | null;
        links: {
            self: string;
            html: string;
            photos: string;
            likes: string;
            portfolio: string;
            following: string;
            followers: string;
        };
        profile_image: {
            small: string;
            medium: string;
            large: string;
        };
        instagram_username: string | null;
        total_collections: number;
        total_likes: number;
        total_photos: number;
        accepted_tos: boolean;
        for_hire: boolean;
        social: {
            instagram_username: string | null;
            portfolio_url: string | null;
            twitter_username: string | null;
            paypal_email: string | null;
        };
    };
}

export interface Flippable extends Photo {
    flipped?: boolean;
}
