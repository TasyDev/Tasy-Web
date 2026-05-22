import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Atoms/Forms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'John Doe',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'john@example.com',
    error: 'Invalid email address',
  },
};
