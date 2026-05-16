import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

const meta = {
  title: 'Organisms/Forms/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
