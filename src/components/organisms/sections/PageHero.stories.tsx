import type { Meta, StoryObj } from '@storybook/react';
import { PageHero } from './PageHero';

const meta = {
  title: 'Organisms/Sections/PageHero',
  component: PageHero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badge: 'Our Blog',
    titleNormal: 'Insights and',
    titleHighlight: 'Ideas',
    description: 'Discover the latest trends, tips, and techniques in modern web development and design.',
  },
};
