import React from 'react';
import { DropdownContainer, DropdownHiden, DropdownItem, DropdownItemHiden } from './styles';

export default ({ change, lang }: { change: any; lang: string }) => {
  function HandleLang(value: string) {
    change(value);
  }

  return (
    <DropdownContainer>
      <DropdownItem>{lang.toLocaleUpperCase()}</DropdownItem>
      <DropdownHiden>
        <DropdownItemHiden onClick={() => HandleLang('es')}>Español [ES]</DropdownItemHiden>
        <DropdownItemHiden onClick={() => HandleLang('en')}>English [EN]</DropdownItemHiden>
      </DropdownHiden>
    </DropdownContainer>
  );
};
