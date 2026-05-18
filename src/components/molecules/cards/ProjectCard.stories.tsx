import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from './ProjectCard';

const meta = {
  title: 'Molecules/Cards/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Modern Web Application',
    description: 'A comprehensive web platform built with Astro, React, and Tailwind CSS.',
    imageSrc: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    href: '#',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px', width: '100vw' }}>
        <Story />
      </div>
    ),
  ],
};
