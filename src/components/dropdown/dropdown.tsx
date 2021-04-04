import React from 'react';
import { DropdownContainer, DropdownHiden, DropdownIcon, DropdownItem, DropdownItemHiden } from './styles';

export default ({ change, lang }: { change: any; lang: string }) => {
  function HandleLang(value: string) {
    change(value);
  }

  return (
    <DropdownContainer>
      <DropdownItem>
        {lang === 'es' ? (
          <DropdownIcon
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/271/flag-colombia_1f1e8-1f1f4.png"
            alt="Español"
            loading="lazy"
          />
        ) : (
          <DropdownIcon
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/flag-united-states_1f1fa-1f1f8.png"
            alt="English"
            loading="lazy"
          />
        )}
      </DropdownItem>
      <DropdownHiden>
        <DropdownItemHiden onClick={() => HandleLang('es')}>Español [ES]</DropdownItemHiden>
        <DropdownItemHiden onClick={() => HandleLang('en')}>English [EN]</DropdownItemHiden>
      </DropdownHiden>
    </DropdownContainer>
  );
};
