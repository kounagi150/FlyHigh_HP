import type { GalleryItem } from '@/types';

export const galleryItems: GalleryItem[] = [
    {
        id: 1,
        src: '/venue.jpg',
        title: '会場の熱気',
        description: '大会会場の雰囲気',
        category: 'VENUE'
    },
    {
        id: 2,
        src: '/match.jpeg',
        title: '対戦の様子',
        description: 'プレイヤーたちの対戦',
        category: 'MATCH'
    },
    {
        id: 3,
        src: '/group.jpeg',
        title: 'プレイヤーたち',
        description: '参加者の集合写真',
        category: 'COMMUNITY'
    },
    {
        id: 4,
        src: '/booth.jpeg',
        title: 'ウメブラ出展ブース',
        description: 'ウメブラでの出展ブース',
        category: 'EXHIBITION'
    },
    {
        id: 5,
        src: '/staff.jpeg',
        title: '大会運営',
        description: '大会運営スタッフ',
        category: 'MANAGEMENT'
    },
    {
        id: 6,
        src: '/smile.jpeg',
        title: 'プレイヤーの様子',
        description: 'プレイヤーたちの表情',
        category: 'PLAYER'
    },
];
