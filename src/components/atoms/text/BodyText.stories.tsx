import type { Meta, StoryObj } from '@storybook/react';
import { BodyText } from './BodyText';
import React from 'react';

const meta = {
  title: 'Atoms/Text/BodyText',
  component: BodyText,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BodyText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>We build highly professional, elegant, and innovative<br/>interfaces for modern startups and forward-thinking brands.</>,
  },
};
