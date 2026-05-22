import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import React from 'react';

const meta = {
  title: 'Organisms/Sections/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    overlineText: 'DIGITAL INNOVATION',
    titlePrefix: <>Crafting Premium<br/></>,
    titleHighlight: 'Digital Experiences',
    bodyContent: <>We build highly professional, elegant, and innovative<br/>interfaces for modern startups and forward-thinking brands.</>,
    buttonLabel: 'Start a Project',
  },
};
