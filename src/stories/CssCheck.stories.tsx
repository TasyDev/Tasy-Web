import type { Meta, StoryObj } from '@storybook/react-vite';

import { expect } from 'storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Checks/CssCheck',
  component: Button,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  args: {
    primary: true,
    label: 'CssCheck',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonPrimaryBackground: Story = {
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'CssCheck' });
    const computed = globalThis.getComputedStyle(button);
    await expect(computed.backgroundColor).toBe('rgb(85, 90, 185)');
  },
};

