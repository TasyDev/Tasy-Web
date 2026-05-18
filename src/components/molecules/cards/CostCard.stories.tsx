import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CostCard } from './CostCard';

const meta = {
  title: 'Molecules/Cards/CostCard',
  component: CostCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: (
      <div className="w-6 h-6 relative overflow-hidden">
        <div className="w-1.5 h-1.5 left-[16px] top-[11px] absolute outline outline-2 outline-offset-[-1px] outline-neutral-900" />
        <div className="w-5 h-2.5 left-[2px] top-[7px] absolute outline outline-2 outline-offset-[-1px] outline-neutral-900" />
      </div>
    ),
    title: 'High Drop-off Rates',
    description: <>Users abandon your platform before<br/>experiencing its core value due to<br/>complex flows.</>,
  },
};
