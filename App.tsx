import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideLayout } from './components/SlideLayout';
import { 
  CoverSlide, 
  InfoSlide, 
  TimelineSlide, 
  GridSlide, 
  TableGranosSlide, 
  TableCapitalSlide,
  MentoringSplitSlide,
  AcademySplitSlide,
  ClosingSlide
} from './components/Slides';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
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

  const currentSlideData = SLIDES[currentSlideIndex];

  const renderSlideContent = () => {
    switch (currentSlideData.type) {
      case 'cover':
        return <CoverSlide data={currentSlideData} />;
      case 'info':
        return <InfoSlide data={currentSlideData} />;
      case 'timeline':
        return <TimelineSlide data={currentSlideData} />;
      case 'grid':
        return <GridSlide data={currentSlideData} />;
      case 'table-granos':
        return <TableGranosSlide data={currentSlideData} />;
      case 'table-capital':
        return <TableCapitalSlide data={currentSlideData} />;
      case 'mentoring-split':
        return <MentoringSplitSlide data={currentSlideData} />;
      case 'academy-split':
        return <AcademySplitSlide data={currentSlideData} />;
      case 'closing':
        return <ClosingSlide data={currentSlideData} />;
      default:
        return <div className="text-red-500">Slide type not found</div>;
    }
  };

  return (
    <SlideLayout
      currentSlide={currentSlideIndex}
      totalSlides={SLIDES.length}
      onNext={nextSlide}
      onPrev={prevSlide}
      title={currentSlideData.type !== 'cover' && currentSlideData.type !== 'closing' ? currentSlideData.title : undefined}
      subtitle={currentSlideData.type !== 'cover' && currentSlideData.type !== 'closing' ? currentSlideData.subtitle : undefined}
    >
      {renderSlideContent()}
    </SlideLayout>
  );
};

export default App;