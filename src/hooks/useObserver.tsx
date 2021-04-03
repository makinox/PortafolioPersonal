import { useEffect, useRef, useState } from 'react';

export const useObserver = ({
  root = null,
  rootMargin = '0px',
  threshold = 0,
}: {
  root?: Element | Document;
  rootMargin?: string;
  threshold?: number;
}) => {
  const containerRef = useRef(null);
  const [isVisible, useVisible] = useState(false);
  const options = { root, rootMargin, threshold };

  function callback(entries) {
    const [entry] = entries;
    useVisible(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, threshold]);

  return [containerRef, isVisible];
};
