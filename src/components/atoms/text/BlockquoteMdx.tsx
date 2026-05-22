import React from 'react';
import { Quote } from './Quote';

/** Wrapper so blockquote in MDX renders as our Quote atom */
export const BlockquoteMdx = (props: React.HTMLAttributes<HTMLQuoteElement>) => (
  <Quote>{props.children}</Quote>
);
