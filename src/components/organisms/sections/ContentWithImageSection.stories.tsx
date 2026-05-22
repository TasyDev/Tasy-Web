import type { Meta, StoryObj } from '@storybook/react';
import { ContentWithImageSection } from './ContentWithImageSection';
import { HiDocumentText, HiLink } from "react-icons/hi2";

const meta = {
  title: 'Organisms/Sections/ContentWithImageSection',
  component: ContentWithImageSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContentWithImageSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ProfileHero: Story = {
  args: {
    imageSrc: "https://placehold.co/448x560",
    subtitle: (
      <>
        Hey, I am<br/>
        <span className="text-amber-700">Alex Jenkins</span>
      </>
    ),
    paragraph1: "I am a passionate digital designer and frontend developer, specializing in creating premium, high-conversion interfaces for modern brands. My approach blends aesthetic precision with scalable architecture.",
    paragraph2: undefined,
    buttons: [
      { label: "Download CV", variant: "primary", icon: <HiDocumentText /> },
      { label: "View LinkedIn", variant: "outline", icon: <HiLink /> }
    ],
    imageClassName: "w-[509px] h-[532px] left-[42px] top-[-11px] absolute origin-top-left rotate-6 bg-amber-700/10 rounded-[40px] blur-[20px]"
  }
};
