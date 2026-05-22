import type { Meta, StoryObj } from '@storybook/react';
import { HeroTitle } from './HeroTitle';
import React from 'react';

const meta = {
  title: 'Atoms/Text/HeroTitle',
  component: HeroTitle,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    prefix: <>Crafting Premium<br/></>,
    highlight: 'Digital Experiences',
  },
};
