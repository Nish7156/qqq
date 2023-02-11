
import React, { useState, useEffect } from 'react';

function Test() {
  const [sectionRef, setSectionRef] = useState<HTMLDivElement | null>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef) {
        const { top, bottom } = sectionRef.getBoundingClientRect();
        setIsSectionVisible(top < window.innerHeight && bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // console.log('Event listener added');

    if (isSectionVisible) {
      // console.log('Class added');
    } else {
      // console.log('Class removed');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // console.log('Event listener removed');
    };
  }, [sectionRef, isSectionVisible]);

  return (
    <div className={`section ${isSectionVisible ? 'section-visible' : ''}`} ref={(ref) => setSectionRef(ref)}>
      <h2>This is a section</h2>
      <p>Scroll down to see the section position change</p>
    </div>
  );
};

export default Test;