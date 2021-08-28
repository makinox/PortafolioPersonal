import { useObserver } from '../../hooks/useObserver';
import { Button, FluidContainer } from '@makinox/makinox-ui';
import React, { useEffect, useState } from 'react';
import { useStudiesQuery } from './Studies.graph';
import { CertCointainer, StudiesContainer, StudiesImage } from './Studies.styles';

type studyBadge = { publicURL: string };

function Studies({ messages, isDark }) {
  const studiesBadges = useStudiesQuery();
  const badgeValues: studyBadge[] = Object.values(studiesBadges);
  const [badges, useBadges] = useState<studyBadge[]>(() => badgeValues.slice(0, 4));
  const [preloaded, setPreloaded] = useState(false);
  const [containerRef, isVisible] = useObserver({});

  useEffect(() => {
    let badgeInterval: ReturnType<typeof setTimeout>;
    if (isVisible) {
      if (!preloaded) {
        badgeValues.map((el, idx) => {
          const preload = new Image();
          preload.src = el.publicURL;
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
    <FluidContainer id="studies">
      <h3 className="headline4 text-center">{messages['edu.title']}</h3>

      <StudiesContainer className="flex justify-center flex-wrap" ref={containerRef as React.MutableRefObject<any>}>
        {badges.map((el, idx) => {
          return <StudiesImage key={idx} src={el.publicURL} alt="Tecnologia" />;
        })}
      </StudiesContainer>

      <CertCointainer className="flex justify-center">
        <Button
          use="contained"
          isDark={isDark}
          message={messages['edu.button']}
          onClick={() => window.open('https://drive.google.com/drive/folders/0B1M5FQ2FYAeQVFhzMGptMFRNMFE?usp=sharing', '_blank')}
        />
      </CertCointainer>
    </FluidContainer>
  );
}

export default Studies;
