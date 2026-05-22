import type { Meta, StoryObj } from '@storybook/react';
import { Overline } from './Overline';

const meta = {
  title: 'Atoms/Text/Overline',
  component: Overline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Overline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'DIGITAL INNOVATION',
  },
};
