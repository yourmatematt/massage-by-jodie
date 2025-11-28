import { useEffect, useRef } from 'react';

interface SquareWidgetProps {
  height?: string;
}

export function SquareWidget({ height = '700px' }: SquareWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://app.squareup.com/appointments/buyer/widget/j83ctblac4w9u9/LTPEQ4ZHKHMW6.js';
    script.async = true;
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="rounded-3xl shadow-2xl overflow-hidden"
      style={{
        backgroundColor: '#fffbf7',
        minHeight: height
      }}
    />
  );
}
