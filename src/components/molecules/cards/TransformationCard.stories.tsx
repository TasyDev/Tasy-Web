import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TransformationCard } from './TransformationCard';

const meta = {
  title: 'Molecules/Cards/TransformationCard',
  component: TransformationCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TransformationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Muted: Story = {
  args: {
    variant: 'muted',
    title: 'The Old Way',
    features: [
      '7+ steps just to sign up',
      'No clear indication of progress',
      'Overwhelming forms and data requests',
      'High friction, low conversion',
    ],
  },
};

export const Highlighted: Story = {
  args: {
    variant: 'highlighted',
    title: 'The New Way',
    features: [
      '1-click social authentication',
      'Progressive profiling over time',
      'Immediate access to core features',
      'Frictionless, high-converting flows',
    ],
  },
};
