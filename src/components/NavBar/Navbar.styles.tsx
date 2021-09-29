import styled from 'styled-components';

export const Bar = styled.nav<{ isDark: boolean }>`
  position: absolute !important;
  z-index: 2;
  width: 100%;

  ${(props) => {
    if (props.isDark) {
      return 'background-color: rgba(var(--dark-onPrimary), .7) !important;';
    } else {
      return 'background-color: rgba(var(--light-background), .7) !important;';
    }
  }}

  & > section > div:nth-child(2) a {
    text-decoration: none;
    margin: 0 10px;
    cursor: pointer;

    ${(props) => {
      if (props.theme?.isDark || props.isDark) {
        return `
        color: rgba(var(--dark-onBackground)) !important;
      `;
      } else {
        return `
        color: rgb(var(--light-onBackground)) !important;
      `;
      }
    }}
  }

  & > section > div:nth-child(3) > div > div > div:first-of-type {
    margin-right: 4px;
  }

  @media (max-width: 370px) {
    & > section > div:nth-child(3) > div > div span span.bar-lang-span {
      display: none;
    }
  }

  @media (max-width: 435px) {
    & > section > div:nth-child(2) a {
      font-size: 15px;
      margin: 0 3px !important;
    }
  }

  @media (max-width: 495px) {
    & > section > div:nth-child(1) {
      display: none;
    }
  }

  @media (max-width: 765px) {
    & > section > div:nth-child(1) span {
      display: none;
    }
    & > section > div:nth-child(3) > div > span div span {
      display: none;
    }
  }
`;

export const BarLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const DropdownItemHidden = styled.span`
  min-width: 150px;
  cursor: pointer;
  padding: 2px 5px;

  & > div:first-of-type {
    margin-right: 4px;
  }

  &:hover {
    background-color: rgba(var(--light-primary), 0.08);
  }
`;

export const BarDropdown = styled.div`
  margin-left: 5px;

  & > div:last-of-type {
    right: 2%;
    top: 1%;
    z-index: 2;
  }

  & > div:last-of-type:hover {
    display: flex !important;
  }
`;
