import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentSection } from './ContentSection';

const meta = {
  title: 'Molecules/Sections/ContentSection',
  component: ContentSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContentSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h2 className="text-3xl font-bold">The main content goes here</h2>
        <p className="text-lg text-gray-600">
          This is an example of passing children into the content section.
          You can include multiple paragraphs, lists, or any other elements.
        </p>
      </>
    ),
    image: {
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
      alt: 'Sample content image'
    }
  },
};

export const WithoutImage: Story = {
  args: {
    children: (
      <>
        <h2 className="text-3xl font-bold">Content only</h2>
        <p className="text-lg text-gray-600">
          This content section does not include an image.
        </p>
      </>
    ),
  },
};
