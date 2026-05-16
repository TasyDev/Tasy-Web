import type { Meta, StoryObj } from '@storybook/react';
import { PortfolioSection } from './PortfolioSection';

const meta: Meta<typeof PortfolioSection> = {
  title: 'Organisms/Sections/PortfolioSection',
  component: PortfolioSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PortfolioSection>;

export const Default: Story = {
  args: {
    overline: "PORTFOLIO",
    title: "Selected Work",
    description: "A showcase of my recent premium digital work, focusing on user experience, conversion, and visual impact.",
    projects: [
      { title: "Fintech Dashboard", description: "A modern, clean SaaS dashboard for financial management.", imageSrc: "https://placehold.co/800x600" },
      { title: "E-commerce Platform", description: "Minimalist fashion e-commerce website with seamless checkout.", imageSrc: "https://placehold.co/800x600" },
      { title: "Brand Identity", description: "Premium stationery mockup and brand identity presentation.", imageSrc: "https://placehold.co/800x600" },
      { title: "Healthcare App", description: "User-centric mobile application for remote health monitoring.", imageSrc: "https://placehold.co/800x600" },
      { title: "Editorial Blog", description: "High-contrast editorial layout for a modern design publication.", imageSrc: "https://placehold.co/800x600" },
      { title: "Marketing Site", description: "High-conversion landing page with bold 3D geometry.", imageSrc: "https://placehold.co/800x600" },
    ]
  },
};

export const MobileView: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
