import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from './BlogCard';

const meta = {
  title: 'Molecules/Cards/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    category: 'DEVELOPMENT',
    date: 'May 18, 2026',
    title: 'Building performant Astro applications',
    description: 'Learn how to leverage Astro islands and partial hydration to build blazing fast websites with minimal client-side JavaScript.',
    href: '#',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
