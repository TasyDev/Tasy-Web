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

export const Carousel: Story = {
  render: () => (
    <div className="w-full max-w-[500px] overflow-x-auto p-4 scrollbar-hide">
      <div className="flex gap-4 min-w-max">
        <div className="w-[300px]">
          <HighlightCard title="Product Design" />
        </div>
        <div className="w-[300px]">
          <HighlightCard title="UI Development" />
        </div>
        <div className="w-[300px]">
          <HighlightCard title="Brand Strategy" />
        </div>
      </div>
    </div>
  )
};
