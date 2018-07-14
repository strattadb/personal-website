import React from 'react';
import styled from 'styled-components';

import ColorHueIncrementator from '../../../ColorHueIncrementator';

const Wrapper = styled.div.attrs({
  style: (props: any) => ({
    color: `hsla(${props.colorHue}, 100%, 50%, 1)`,
  }),
})`
  font-family: var(--display-font-family);
  font-size: var(--xxl-font-size);

  margin-bottom: var(--xs-space);

  transition: var(--sm-transition);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: calc(var(--xxl-font-size) * 1.4);
  }
` as any;

const FirstName = () => <div>Diego</div>;
const LastName = () => <div>Stratta</div>;

export const Name = () => (
  <ColorHueIncrementator
    render={({ colorHue }) => (
      <Wrapper colorHue={colorHue}>
        <FirstName />
        <LastName />
      </Wrapper>
    )}
  />
);

export default Name;
