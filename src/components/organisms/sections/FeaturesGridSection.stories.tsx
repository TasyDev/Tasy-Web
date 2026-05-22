import type { Meta, StoryObj } from '@storybook/react';
import { FeaturesGridSection } from './FeaturesGridSection';

const meta = {
  title: 'Organisms/Sections/FeaturesGridSection',
  component: FeaturesGridSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeaturesGridSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
