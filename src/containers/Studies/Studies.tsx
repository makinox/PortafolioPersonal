import { useObserver } from '../../hooks/useObserver';
import { FluidContainer } from '@makinox/makinox-ui';
import React, { useEffect, useState } from 'react';
import { useStudiesQuery } from './Studies.graph';
import { StudiesImage } from './Studies.styles';

function Studies() {
  const studiesBadges = useStudiesQuery();
  const [badges, useBadges] = useState(() => Object.values(studiesBadges).slice(0, 4));
  const [containerRef, isVisible] = useObserver({});

  useEffect(() => {
    let badgeInterval: ReturnType<typeof setTimeout>;
    if (isVisible) {
      badgeInterval = setInterval(() => {
        useBadges([]);
        useBadges(
          Object.values(studiesBadges)
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
        );
      }, 2500);
    }
    return () => clearInterval(badgeInterval);
  }, [isVisible]);

  return (
    <FluidContainer>
      <h3 className="headline4">What I have learned so far</h3>

      <div className="flex justify-center flex-wrap" ref={containerRef as React.MutableRefObject<any>}>
        {badges.map((el: any, idx) => {
          return <StudiesImage key={idx} src={el.publicURL} alt="Tecnologia" />;
        })}
      </div>
    </FluidContainer>
  );
}

export default Studies;