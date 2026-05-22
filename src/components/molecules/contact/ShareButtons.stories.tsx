import type { Meta, StoryObj } from '@storybook/react';
import { ShareButtons } from './ShareButtons';

const meta = {
  title: 'Molecules/Contact/ShareButtons',
  component: ShareButtons,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShareButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tags: ['Design', 'UI/UX', 'Branding'],
  },
};
