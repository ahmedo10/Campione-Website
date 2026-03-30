'use client';
import { useInView } from '@/hooks/useInView';

/**
 * Reveal — wraps children with a scroll-triggered animation.
 * @param {string} type  — 'up' | 'left' | 'right' | 'scale'  (default: 'up')
 * @param {number} delay — stagger index 1-8 maps to .d1-.d8 classes
 * @param {string} as    — HTML tag to render (default: 'div')
 */
export default function Reveal({ children, type = 'up', delay = 0, as: Tag = 'div', style = {}, className = '' }) {
  const [ref, inView] = useInView();

  const base = {
    up:    'reveal',
    left:  'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }[type] ?? 'reveal';

  const delayClass = delay ? `d${delay}` : '';
  const cls = [base, inView ? 'visible' : '', delayClass, className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={cls} style={style}>
      {children}
    </Tag>
  );
}
