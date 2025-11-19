// ギャラリーアイテムの型定義
export interface GalleryItem {
    id: number;
    src: string;
    title: string;
    description: string;
    category: string;
}

// SNSリンクの型定義
export interface SocialLink {
    title: string;
    handle: string;
    url: string;
    icon: React.ComponentType<{ className: string }>;
    description: string;
    color: string;
}

// ナビゲーションアイテムの型定義
export interface NavItem {
    id: string;
    label: string;
}
