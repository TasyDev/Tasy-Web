import React from 'react';
import { Tag } from '../../atoms/actions/Tag';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

export interface ShareButtonsProps {
  tags: string[];
}

export const ShareButtons = ({ tags = ["Design", "UI/UX", "Branding"] }: ShareButtonsProps) => {
  return (
    <div className="w-full max-w-[800px] pt-8 mx-auto">
      <div className="w-full p-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex justify-start items-start gap-2 overflow-x-auto pb-2 md:pb-0">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="flex justify-start items-center gap-4">
          <div className="inline-flex flex-col justify-start items-center">
            <div className="justify-center text-neutral-400 text-sm font-semibold font-sans uppercase leading-5 tracking-wider">SHARE</div>
          </div>
          <div className="flex justify-start items-start gap-2">
            {[FaFacebook, FaTwitter, FaLinkedin].map((Icon, i) => (
              <div key={i} className="w-10 h-10 bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-neutral-200 transition-colors">
                <Icon className="text-neutral-900 w-4 h-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
