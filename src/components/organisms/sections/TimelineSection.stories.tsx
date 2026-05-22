import type { Meta, StoryObj } from '@storybook/react';
import { TimelineSection } from './TimelineSection';

const meta = {
  title: 'Organisms/Sections/TimelineSection',
  component: TimelineSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TimelineSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
