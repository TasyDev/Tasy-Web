import type { Meta, StoryObj } from '@storybook/react';
import { BlogList } from './BlogList';

const meta = {
  title: 'Organisms/Grids/BlogList',
  component: BlogList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogList>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyItems = Array.from({ length: 8 }).map((_, i) => ({
  id: String(i),
  image: `https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=800&auto=format&fit=crop`,
  category: i % 2 === 0 ? 'DESIGN' : 'DEVELOPMENT',
  date: 'May 18, 2026',
  title: `Sample Blog Post ${i + 1}`,
  description: 'This is a sample description for the blog post list to demonstrate pagination and filtering capabilities.',
  href: '#',
}));

export const Default: Story = {
  args: {
    items: dummyItems,
    categories: ['All Posts', 'Design', 'Development'],
  },
};
