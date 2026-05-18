import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CostSection } from './CostSection';

const meta = {
  title: 'Organisms/Sections/CostSection',
  component: CostSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CostSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
