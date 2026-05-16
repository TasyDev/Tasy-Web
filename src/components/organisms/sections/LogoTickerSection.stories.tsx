import type { Meta, StoryObj } from '@storybook/react';
import { LogoTickerSection } from './LogoTickerSection';

const meta = {
  title: 'Organisms/Sections/LogoTickerSection',
  component: LogoTickerSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogoTickerSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
