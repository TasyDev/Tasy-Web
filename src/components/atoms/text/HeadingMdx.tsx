import React from 'react';
import { Heading } from './Heading';

/** Wrapper pre-configured for use as MDX h2 override */
export const HeadingH2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <Heading level={2} variant="section" className="pt-8 pb-2" {...props} />
);

/** Wrapper pre-configured for use as MDX h3 override */
export const HeadingH3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <Heading level={3} variant="card" className="pt-6 pb-1" {...props} />
);
