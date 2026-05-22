import type { Meta, StoryObj } from '@storybook/react';
import { CategoryPill } from './CategoryPill';

const meta = {
  title: 'Atoms/Actions/CategoryPill',
  component: CategoryPill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CategoryPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Category',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Active Category',
    isActive: true,
  },
};
