import styled from 'styled-components';

interface SectionProps {
  readonly backUrl?: string;
}

export const Section = styled.section<SectionProps>`
  /* background-color: #666666; */
  background-image: url(${(p: any) => (p.backUrl ? p.backUrl : '')});
  background-repeat: no-repeat;
  background-position-x: 370%;
  background-position-y: 20%;
  background-size: 85%;
`;
