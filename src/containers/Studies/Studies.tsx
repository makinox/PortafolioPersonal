import React, { useEffect, useState } from 'react';
import { ButtonContained, FluidContainer } from '@makinox/makinox-ui';

import { CertCointainer, StudiesContainer, StudiesImage } from './Studies.styles';
import { useObserver } from '../../hooks/useObserver';
import { useStudiesQuery } from './Studies.graph';
import { translations } from '../../types';

function Studies({ messages, isDark }: { messages: translations; isDark: boolean }) {
  const studiesBadges = useStudiesQuery();
  const badgeValues = Object.values(studiesBadges);
  const [badges, useBadges] = useState(() => badgeValues.slice(0, 4));
  const [preloaded, setPreloaded] = useState(false);
  const [containerRef, isVisible] = useObserver({});

  useEffect(() => {
    let badgeInterval: ReturnType<typeof setTimeout>;
    if (isVisible) {
      if (!preloaded) {
        badgeValues.map((el, idx) => {
          const preload = new Image();
          preload.src = el?.publicURL as string;
          if (idx + 1 === badgeValues.length) {
            setPreloaded(true);
          }
        });
      }
      badgeInterval = setInterval(() => {
        useBadges([]);
        useBadges(badgeValues.sort(() => 0.5 - Math.random()).slice(0, 4));
      }, 2500);
    }
    return () => clearInterval(badgeInterval);
  }, [isVisible]);

  return (
    <section id="studies" className={FluidContainer()}>
      <h3 className="headline4 text-center">{messages['edu.title']}</h3>

      <StudiesContainer className="flex justify-center flex-wrap" ref={containerRef as React.MutableRefObject<any>}>
        {badges.map((el) => {
          return <StudiesImage key={el?.publicURL as string} src={el?.publicURL as string} alt="Tecnologia" />;
        })}
      </StudiesContainer>

      <CertCointainer className="flex justify-center">
        <button
          className={ButtonContained({ isDark })}
          onClick={() => window.open('https://drive.google.com/drive/folders/0B1M5FQ2FYAeQVFhzMGptMFRNMFE?usp=sharing', '_blank')}
        >
          {messages['edu.button']}
        </button>
      </CertCointainer>
    </section>
  );
}

export default Studies;
