import React from 'react';
import { Subtitle } from '../../atoms/text/Subtitle';
import { HighlightCard, type HighlightCardProps } from '../../molecules/cards/HighlightCard';
import { ServiceCard } from '../../molecules/cards/ServiceCard';

import { FaPencilRuler, FaPaintBrush, FaCode, FaMobileAlt, FaSearch, FaChartBar, FaLaptop, FaDatabase, FaCog, FaLightbulb } from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  code: <FaCode />,
  database: <FaDatabase />,
  cog: <FaCog />,
  lightbulb: <FaLightbulb />,
  pencil: <FaPencilRuler />,
  brush: <FaPaintBrush />,
  mobile: <FaMobileAlt />,
  search: <FaSearch />,
  chart: <FaChartBar />,
  laptop: <FaLaptop />
};

export interface ServiceItem {
  icon?: React.ReactNode;
  iconName?: string;
  title: string;
  description?: React.ReactNode;
}

export interface FeaturesGridSectionProps {
  title?: string;
  highlightCard?: HighlightCardProps;
  services?: ServiceItem[];
}

export const FeaturesGridSection = ({
  title = "Our Services",
  highlightCard,
  services = [
    { icon: <FaPencilRuler />, title: "UI/UX Design" },
    { icon: <FaPaintBrush />, title: "Brand Identity" },
    { icon: <FaCode />, title: "Web Development" },
    { icon: <FaMobileAlt />, title: "Mobile Apps" },
    { icon: <FaSearch />, title: "SEO Strategy" },
    { icon: <FaChartBar />, title: "Data Analytics" }
  ]
}: FeaturesGridSectionProps) => {
  return (
    <div className="w-full py-12 md:py-24 bg-neutral-100/30 flex justify-center items-start">
      <div className="w-full max-w-[1200px] px-4 md:px-8 flex flex-col lg:flex-row justify-start items-start gap-8">
        
        {/* Left Column */}
        <div className="w-full lg:w-96 shrink-0 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start">
            <Subtitle text={title} level="h3" variant="h3" />
          </div>
          <HighlightCard {...highlightCard} />
        </div>
        
        {/* Right Column (Grid of services) */}
        <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon || (service.iconName ? iconMap[service.iconName] : null)}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
