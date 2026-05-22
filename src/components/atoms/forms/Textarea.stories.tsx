import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta = {
  title: 'Atoms/Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Tell us about your project...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Tell us about your project...',
    error: 'Message is required',
  },
};
