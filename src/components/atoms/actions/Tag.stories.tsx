import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
  title: 'Atoms/Actions/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Technology',
  },
};

export const CustomClass: Story = {
  args: {
    label: 'Custom Styled',
    className: 'bg-amber-100 text-amber-900',
  },
};
