import { ButtonContained, ButtonOutline, Card, FluidContainer } from '@makinox/makinox-ui';
import React, { useMemo, useState } from 'react';

import { translations } from '../../types';

import { SKILL_LEVELS, currentSkills } from './Skills.mock';

export default function Skills({ messages, isDark }: { messages: translations; isDark: boolean }) {
  const SkillList = [
    {
      text: messages[SKILL_LEVELS.MASTER],
      filter: SKILL_LEVELS.MASTER,
      count: currentSkills.filter((skill) => skill.level === SKILL_LEVELS.MASTER).length,
    },
    {
      text: messages[SKILL_LEVELS.EXPERT],
      filter: SKILL_LEVELS.EXPERT,
      count: currentSkills.filter((skill) => skill.level === SKILL_LEVELS.EXPERT).length,
    },
    {
      text: messages[SKILL_LEVELS.PROFICIENT],
      filter: SKILL_LEVELS.PROFICIENT,
      count: currentSkills.filter((skill) => skill.level === SKILL_LEVELS.PROFICIENT).length,
    },
    {
      text: messages[SKILL_LEVELS.BEGINNER],
      filter: SKILL_LEVELS.BEGINNER,
      count: currentSkills.filter((skill) => skill.level === SKILL_LEVELS.BEGINNER).length,
    },
    {
      text: messages[SKILL_LEVELS.INTERESTED],
      filter: SKILL_LEVELS.INTERESTED,
      count: currentSkills.filter((skill) => skill.level === SKILL_LEVELS.INTERESTED).length,
    },
    { text: messages['exp.filter5'], filter: 'All', count: currentSkills.length },
  ];
  const [filter, useFilter] = useState(SkillList[0]);

  const filterSkills = useMemo(() => {
    if (filter.filter === 'All') return currentSkills;
    return currentSkills.filter((skill) => skill.level === filter.filter);
  }, [filter]);

  return (
    <div className={FluidContainer()}>
      <h3 className="headline4 text-center" style={{ margin: '40px 0' }}>
        {messages['edu.title']}
      </h3>
      <div className="flex justify-center flex-wrap">
        {SkillList.map((element, idx) => {
          if (element.filter === filter.filter) {
            return (
              <button className={ButtonContained({ isDark, css: { margin: '0  5px' } })} key={`${element}-${idx}`} onClick={() => useFilter(element)}>
                {element.text} {element.count}
              </button>
            );
          }

          return (
            <button className={ButtonOutline({ isDark, css: { margin: '0  5px' } })} key={`${element}-${idx}`} onClick={() => useFilter(element)}>
              {element.text} {element.count}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center flex-wrap" style={{ margin: '30px 0' }}>
        {filterSkills.map((skill) => (
          <article key={skill.name} className={Card({ isDark, css: { width: 'max-content', padding: '5px 10px', margin: '5px ' } })}>
            {skill.name}
          </article>
        ))}
      </div>
      <div className="flex justify-center" style={{ marginTop: '40px', marginBottom: '40px' }}>
        <button
          className={ButtonContained({ isDark })}
          onClick={() => window.open('https://drive.google.com/drive/folders/0B1M5FQ2FYAeQVFhzMGptMFRNMFE?usp=sharing', '_blank')}
        >
          {messages['edu.button']}
        </button>
      </div>
    </div>
  );
}
