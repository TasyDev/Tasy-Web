import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ConversionContactSection } from './ConversionContactSection';

const meta = {
  title: 'Organisms/Sections/ConversionContactSection',
  component: ConversionContactSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ConversionContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
