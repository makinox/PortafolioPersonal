import React from 'react';
import { DropdownHiden, DropdownItem, DropdownItemHiden } from './styles';

export default ({ change, lang }: { change: any; lang: string }) => {
  function HandleLang(value: string) {
    change(value);
  }

  return (
    <div>
      <DropdownItem>{lang.toLocaleUpperCase()}</DropdownItem>
      <DropdownHiden>
        <DropdownItemHiden onClick={() => HandleLang('es')}>Español [ES]</DropdownItemHiden>
        <DropdownItemHiden onClick={() => HandleLang('en')}>English [EN]</DropdownItemHiden>
      </DropdownHiden>
    </div>
  );
};
