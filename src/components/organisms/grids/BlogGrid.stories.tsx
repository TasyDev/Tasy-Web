import type { Meta, StoryObj } from '@storybook/react';
import { BlogGrid } from './BlogGrid';

const meta = {
  title: 'Organisms/Grids/BlogGrid',
  component: BlogGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
        category: 'DEVELOPMENT',
        date: 'May 18, 2026',
        title: 'Building performant Astro applications',
        description: 'Learn how to leverage Astro islands and partial hydration to build blazing fast websites.',
        href: '#',
      },
      {
        id: '2',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop',
        category: 'DESIGN',
        date: 'Apr 24, 2026',
        title: 'Modern UI Patterns',
        description: 'Exploring the latest trends in UI design and how to implement them effectively.',
        href: '#',
      },
      {
        id: '3',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
        category: 'BUSINESS',
        date: 'Mar 10, 2026',
        title: 'Scaling your agency',
        description: 'Tips and tricks for scaling a web design and development agency in 2026.',
        href: '#',
      },
    ],
  },
};
