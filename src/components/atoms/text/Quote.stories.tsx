import type { Meta, StoryObj } from '@storybook/react';
import { Quote } from './Quote';

const meta: Meta<typeof Quote> = {
  title: 'Atoms/Text/Quote',
  component: Quote,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Default: Story = {
  args: {
    children: '"Design is not just what it looks like and feels like. Design is how it works, combined with a striking visual language."',
  },
};
