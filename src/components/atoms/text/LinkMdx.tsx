import React from 'react';

type LinkMdxProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function LinkMdx({ className = '', target, rel, ...props }: LinkMdxProps) {
  const safeRel =
    target === '_blank'
      ? rel
        ? rel
        : 'noopener noreferrer'
      : rel;

  return (
    <a
      {...props}
      target={target}
      rel={safeRel}
      className={[
        'text-amber-700 underline underline-offset-4 decoration-amber-700/40',
        'hover:text-amber-800 hover:decoration-amber-800/60 transition-colors',
        'font-semibold',
        className,
      ].join(' ')}
    />
  );
}

