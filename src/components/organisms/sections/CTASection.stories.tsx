import type { Meta, StoryObj } from '@storybook/react';
import { CTASection } from './CTASection';

const meta: Meta<typeof CTASection> = {
  title: 'Organisms/Sections/CTASection',
  component: CTASection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CTASection>;

export const Default: Story = {
  args: {
    title: "Ready to elevate your digital presence?",
    description: "Join hundreds of forward-thinking brands that trust our design philosophy. Let's build something extraordinary together.",
    buttonText: "Get Started"
  },
};
