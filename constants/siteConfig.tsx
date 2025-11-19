import { Trophy } from 'lucide-react';
import type { SocialLink, NavItem } from '@/types';

// Xアイコン（旧Twitter）のSVGコンポーネント
export function XIcon({ className }: { className: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

// 次回開催日
export const NEXT_EVENT_DATE = "2025年11月予定";

// ナビゲーション項目
export const navItems: NavItem[] = [
    { id: 'about', label: 'ABOUT' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'links', label: 'LINKS' }
];

// SNSリンクとエントリーサイト
export const socialLinks: SocialLink[] = [
    {
        title: '大会公式X',
        handle: '@FlyHigh_smash',
        url: 'https://twitter.com/FlyHigh_smash',
        icon: XIcon,
        description: '最新情報をお届け',
        color: 'from-blue-500 to-blue-600'
    },
    {
        title: '主催者X',
        handle: '@ABFly_Kamazuka',
        url: 'https://twitter.com/ABFly_Kamazuka',
        icon: XIcon,
        description: '大会運営者',
        color: 'from-purple-500 to-purple-600'
    },
    {
        title: 'start.gg',
        handle: '大会エントリー',
        url: 'https://start.gg',
        icon: Trophy,
        description: 'エントリーはこちら',
        color: 'from-orange-500 to-orange-600'
    }
];
