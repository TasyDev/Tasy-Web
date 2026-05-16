import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { HighlightCard } from '../../molecules/cards/HighlightCard';
import { ServiceCard } from '../../molecules/cards/ServiceCard';

import { FaPencilRuler, FaPaintBrush, FaCode, FaMobileAlt, FaSearch, FaChartBar } from 'react-icons/fa';

export const FeaturesGridSection = () => {
  return (
    <div className="w-full py-12 md:py-24 bg-neutral-100/30 flex justify-center items-start">
      <div className="w-full max-w-[1200px] px-4 md:px-8 flex flex-col lg:flex-row justify-start items-start gap-8">
        
        {/* Left Column */}
        <div className="w-full lg:w-96 shrink-0 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start">
            <Subtitle text="Our Services" level="h3" variant="h3" />
          </div>
          <HighlightCard />
        </div>
        
        {/* Right Column (Grid of services) */}
        <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ServiceCard icon={<FaPencilRuler />} title="UI/UX Design" />
          <ServiceCard icon={<FaPaintBrush />} title="Brand Identity" />
          <ServiceCard icon={<FaCode />} title="Web Development" />
          <ServiceCard icon={<FaMobileAlt />} title="Mobile Apps" />
          <ServiceCard icon={<FaSearch />} title="SEO Strategy" />
          <ServiceCard icon={<FaChartBar />} title="Data Analytics" />
        </div>

      </div>
    </div>
  );
};
