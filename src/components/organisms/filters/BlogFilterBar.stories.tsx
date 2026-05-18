import type { Meta, StoryObj } from '@storybook/react';
import { BlogFilterBar } from './BlogFilterBar';

const meta = {
  title: 'Organisms/Filters/BlogFilterBar',
  component: BlogFilterBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogFilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categories: ['All Posts', 'Design', 'Development', 'Business'],
    activeCategory: 'All Posts',
  },
};
