import type { Meta, StoryObj } from '@storybook/react';
import { ContentWithImageSection } from './ContentWithImageSection';

const meta = {
  title: 'Organisms/Sections/ContentWithImageSection',
  component: ContentWithImageSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContentWithImageSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
