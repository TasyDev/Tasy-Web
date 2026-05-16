import type { Meta, StoryObj } from '@storybook/react';
import { BlogPostHero } from './BlogPostHero';

const meta: Meta<typeof BlogPostHero> = {
  title: 'Molecules/Sections/BlogPostHero',
  component: BlogPostHero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BlogPostHero>;

export const Default: Story = {
  args: {
    category: "DESIGN",
    date: "OCTOBER 12, 2023",
    title: "The Future of Premium Digital Interfaces",
    subtitle: "Exploring how modern startups are using bold typography, oxidized orange, and abstract shapes to dominate the market.",
  },
};
