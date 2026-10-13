export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    cover: string;
    author_name: string;
    author_avatar: string;
    author_role: string;
    published_at: string;
    read_time: number;
    tags: string[] | null;
}

export interface BlogResponse {
    id: number;
    post_id: number;
    author_name: string;
    author_avatar: string;
    author_role: string;
    text: string;
    created_at: string;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    cover: string;
    author_name: string;
    author_avatar: string;
    author_role: string;
    author_bio: string | null;
    published_at: string;
    read_time: number;
    tags: string[] | null;
}
