import styled from 'styled-components';

export const DropdownHiden = styled.div`
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  flex-direction: column;
  position: absolute;
  border-radius: 3px;
  display: none;
  right: 1%;
`;

export const DropdownContainer = styled.div`
  &:hover > ${DropdownHiden} {
    display: flex !important;
  }
`;

export const DropdownIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const DropdownItem = styled.span`
  color: rgba(0, 0, 0, 0.7);
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

export const DropdownItemHiden = styled.span`
  width: max-content;
  cursor: pointer;
  padding: 10px;
  color: rgba(0, 0, 0, 0.7);

  &:hover {
    color: rgb(0, 0, 0);
  }

  &:last-of-type {
    border-top: 1px solid #f0f0f0;
  }
`;
