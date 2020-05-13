import styled from 'styled-components';

interface SectionProps {
  readonly backUrl: string;
}

export const Section = styled.section<SectionProps>`
  background-image: url(${(p: any) => (p.backUrl ? p.backUrl : '../../images/background/form1.svg')});
  background-repeat: no-repeat;
  background-position-x: 370%;
  background-position-y: 20%;
  background-size: 85%;

  @media (max-width: 575.98px) {
    background-position-x: 340%;
    background-size: 80%;
  }
`;
