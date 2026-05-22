import type { Meta, StoryObj } from '@storybook/react';
import { ProjectHero } from './ProjectHero';

const meta = {
  title: 'Molecules/Sections/ProjectHero',
  component: ProjectHero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: 'Case Study',
    title: 'Transforming User Experience',
    subtitle: 'A complete redesign of a core banking application, focusing on accessibility and seamless transactions.',
  },
};
