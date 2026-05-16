import type { Meta, StoryObj } from '@storybook/react';
import { HighlightCard } from './HighlightCard';

const meta = {
  title: 'Molecules/Cards/HighlightCard',
  component: HighlightCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HighlightCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
