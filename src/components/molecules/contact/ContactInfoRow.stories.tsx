import type { Meta, StoryObj } from '@storybook/react';
import { ContactInfoRow } from './ContactInfoRow';
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const meta = {
  title: 'Molecules/Contact/ContactInfoRow',
  component: ContactInfoRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactInfoRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <FaEnvelope />,
    text: 'hello@agency.com',
  },
};
