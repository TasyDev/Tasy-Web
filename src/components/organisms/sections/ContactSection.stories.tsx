import type { Meta, StoryObj } from '@storybook/react';
import { ContactSection } from './ContactSection';

const meta = {
  title: 'Organisms/Sections/ContactSection',
  component: ContactSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
