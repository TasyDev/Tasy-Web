import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Atoms/Text/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Display: Story = {
  args: {
    level: 1,
    variant: 'display',
    children: 'The Future of Premium Digital Interfaces',
  },
};

export const Hero: Story = {
  args: {
    level: 1,
    variant: 'hero',
    children: 'Crafting Premium Digital Experiences',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Section: Story = {
  args: {
    level: 2,
    variant: 'section',
    children: 'Embracing Bold Geometry',
  },
};

export const CardTitle: Story = {
  args: {
    level: 3,
    variant: 'card',
    children: 'Digital Product Design',
  },
};
