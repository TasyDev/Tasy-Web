import type { Meta, StoryObj } from '@storybook/react';
import { ServiceCard } from './ServiceCard';
import React from 'react';
import { FaPencilRuler } from 'react-icons/fa';

const meta = {
  title: 'Molecules/Cards/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <FaPencilRuler />,
    title: 'UI/UX Design',
  },
};
