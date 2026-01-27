import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES, SlideData } from './constants';
import { SlideLayout } from './components/SlideLayout';
import { 
  CoverSlide, 
  InfoSlide,
  ObjectivesSlide, 
  TimelineSlide, 
  GridSlide, 
  TableGranosSlide, 
  TableCapitalSlide,
  MentoringSplitSlide,
  AcademySplitSlide,
  ClosingSlide
} from './components/Slides';
import { ReportView } from './components/ReportView';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isPrinting, setIsPrinting] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handlePrint = useCallback(() => {
    setIsPrinting(true);
    // Wait for render update then print
    setTimeout(() => {
        window.print();
        setIsPrinting(false);
    }, 100);
  }, []);

  const renderSlide = (data: SlideData) => {
      switch (data.type) {
        case 'cover':
          return <CoverSlide data={data} />;
        case 'objectives':
          return <ObjectivesSlide data={data} />;
        case 'info':
          return <InfoSlide data={data} />;
        case 'timeline':
          return <TimelineSlide data={data} />;
        case 'grid':
          return <GridSlide data={data} />;
        case 'table-granos':
          return <TableGranosSlide data={data} />;
        case 'table-capital':
          return <TableCapitalSlide data={data} />;
        case 'mentoring-split':
          return <MentoringSplitSlide data={data} />;
        case 'academy-split':
          return <AcademySplitSlide data={data} />;
        case 'closing':
          return <ClosingSlide data={data} onPrint={handlePrint} />;
        default:
          return <div className="text-red-500">Slide type not found</div>;
      }
  };

  const currentSlideData = SLIDES[currentSlideIndex];

  // If printing, render the clean Report View
  if (isPrinting) {
      return <ReportView slides={SLIDES} />;
  }

  // Normal View
  return (
    <SlideLayout
      currentSlide={currentSlideIndex}
      totalSlides={SLIDES.length}
      onNext={nextSlide}
      onPrev={prevSlide}
      title={currentSlideData.type !== 'cover' && currentSlideData.type !== 'closing' ? currentSlideData.title : undefined}
      subtitle={currentSlideData.type !== 'cover' && currentSlideData.type !== 'closing' ? currentSlideData.subtitle : undefined}
      direction={direction}
    >
      {renderSlide(currentSlideData)}
    </SlideLayout>
  );
};

export default App;