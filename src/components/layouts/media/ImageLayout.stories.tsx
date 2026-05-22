import type { Meta, StoryObj } from '@storybook/react';
import { ImageLayout } from './ImageLayout';

const meta = {
  title: 'Layouts/Media/ImageLayout',
  component: ImageLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
