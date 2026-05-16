import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';
import React from 'react';

const meta = {
  title: 'Molecules/Timeline/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
      { number: '01', title: 'Discovery', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> },
      { number: '02', title: 'Strategy', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> },
      { number: '03', title: 'Design', description: <>We define the core problems<br/>and uncover opportunities<br/>tailored to your audience.</> },
    ]
  }
};
