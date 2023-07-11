import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import SliderImg1 from '../../../public/images/sliderImg1.jpg';
import SliderImg2 from '../../../public/images/sliderImg2.jpg';
import SliderImg3 from '../../../public/images/sliderImg3.jpg';

const Slider = () => {
  const sliderRef = useRef(null);
  let currentIndex = 0;
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;

  useEffect(() => {
    const slider = sliderRef.current;
    const slides = slider.children;

    const slideWidth = slides[0].offsetWidth;

    // Set initial position
    gsap.set(slides, { x: (i) => i * slideWidth });

    const handleDragStart = (event) => {
      isDragging = true;
      startPos = getPositionX(event);
      currentTranslate = gsap.getProperty(slider, 'x');
      slider.classList.add('grabbing');
    };

    const handleDragMove = (event) => {
      if (!isDragging) return;
      const currentPosition = getPositionX(event);
      const translate = currentTranslate + currentPosition - startPos;
      gsap.set(slider, { x: translate });
    };

    const handleDragEnd = () => {
      isDragging = false;
      slider.classList.remove('grabbing');
      const moveBy = currentTranslate - gsap.getProperty(slider, 'x');

      if (moveBy < -100 && currentIndex < 2) {
        currentIndex++;
      } else if (moveBy > 100 && currentIndex > 0) {
        currentIndex--;
      }

      goToSlide(currentIndex);
    };

    const getPositionX = (event) => {
      return event.type.includes('mouse')
        ? event.pageX
        : event.touches[0].clientX;
    };

    const goToSlide = (index) => {
      gsap.to(slider, 0.4, {
        x: -index * slideWidth,
        ease: 'power2.inOut',
      });
      currentIndex = index;
    };

    const slideInterval = setInterval(() => {
      if (currentIndex === 2) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      goToSlide(currentIndex);
    }, 5000);

    slider.addEventListener('mousedown', handleDragStart);
    slider.addEventListener('touchstart', handleDragStart);
    slider.addEventListener('mousemove', handleDragMove);
    slider.addEventListener('touchmove', handleDragMove);
    slider.addEventListener('mouseup', handleDragEnd);
    slider.addEventListener('touchend', handleDragEnd);

    return () => {
      clearInterval(slideInterval);
      slider.removeEventListener('mousedown', handleDragStart);
      slider.removeEventListener('touchstart', handleDragStart);
      slider.removeEventListener('mousemove', handleDragMove);
      slider.removeEventListener('touchmove', handleDragMove);
      slider.removeEventListener('mouseup', handleDragEnd);
      slider.removeEventListener('touchend', handleDragEnd);
    };
  }, []);

  return (
    <div className="slider__wrapper">
      <div className="slider" ref={sliderRef} style={{display: "flex"}}>
      <div className="slide" style={{width: "100%", height: "1000px"}}>
        <Image src={SliderImg1} fill={true} />
      </div>
      <div className="slide" style={{width: "1440px", height: "1000px"}}>
        <Image src={SliderImg2} fill={true} />
      </div>
      <div className="slide" style={{width: "1440px", height: "1000px"}}>
        <Image src={SliderImg3} fill={true} />
      </div>
    </div>
    <div className="controls">
        <button className="prev-button" onClick={() => slideTo(-1)}>
          Prev
        </button>
        <button className="next-button" onClick={() => slideTo(1)}>
          Next
        </button>
      </div>
    </div>
    
  );
};

export default Slider;