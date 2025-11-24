import { InlineWidget } from 'react-calendly';
import { useEffect, useState } from 'react';

interface CalendlyWidgetProps {
  url: string;
  hideEventTypeDetails?: boolean;
  hideGdprBanner?: boolean;
  backgroundColor?: string;
  textColor?: string;
  primaryColor?: string;
  height?: string;
}

export function CalendlyWidget({
  url,
  hideEventTypeDetails = false,
  hideGdprBanner = true,
  backgroundColor = 'fffbf7',
  textColor = '4d4049',
  primaryColor = 'e8714f',
  height = '700px'
}: CalendlyWidgetProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const widgetHeight = isMobile ? '900px' : height;

  return (
    <div
      className="rounded-3xl shadow-2xl overflow-hidden"
      style={{
        backgroundColor: '#fffbf7',
        height: widgetHeight
      }}
    >
      <InlineWidget
        url={url}
        styles={{
          height: widgetHeight,
          width: '100%'
        }}
        pageSettings={{
          hideEventTypeDetails,
          hideGdprBanner,
          backgroundColor,
          textColor,
          primaryColor
        }}
      />
    </div>
  );
}