import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TransformationSection } from './TransformationSection';

const meta = {
  title: 'Organisms/Sections/TransformationSection',
  component: TransformationSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TransformationSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
