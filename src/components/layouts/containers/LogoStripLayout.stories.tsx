import type { Meta, StoryObj } from '@storybook/react';
import { LogoStripLayout } from './LogoStripLayout';
import React from 'react';
import { FaApple, FaAmazon, FaFigma, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';

const meta = {
  title: 'Layouts/Containers/LogoStripLayout',
  component: LogoStripLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogoStripLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icons: [
      <FaApple key="apple" />,
      <FaAmazon key="amazon" />,
      <FaFigma key="figma" />,
      <FaReact key="react" />,
      <FaNodeJs key="nodejs" />,
      <FaGithub key="github" />
    ]
  }
};
