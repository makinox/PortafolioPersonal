import styled from 'styled-components';
import { Dropdown, TopBar } from '@makinox/makinox-ui';

export const Bar = styled(TopBar)`
  & > div > div:nth-child(2) a {
    color: #000;
    text-decoration: none;
    margin: 0 10px;
    cursor: pointer;
  }

  @media (max-width: 435px) {
    & > div > div:nth-child(2) a {
      font-size: 15px;
      margin: 0 3px !important;
    }
  }

  @media (max-width: 495px) {
    & > div > div:nth-child(1) {
      display: none;
    }
  }

  @media (max-width: 765px) {
    & > div > div:nth-child(1) span {
      display: none;
    }
    & > div > div:nth-child(3) > div > span div span {
      display: none;
    }
  }
`;

export const BarLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const DropdownItem = styled.span`
  min-width: 150px;
  cursor: pointer;
  padding: 5px;

  &:hover {
    background-color: rgba(var(--light-primary), 0.08);
  }
`;

export const BarDropdown = styled(Dropdown)`
  & > div {
    right: 2%;
  }
`;
