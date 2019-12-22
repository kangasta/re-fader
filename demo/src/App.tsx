import React from 'react';
import styled from 'styled-components';

import { Link } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

import { IntervalChanger } from 're-fader';

const Background = styled.div`
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -10;
`;

const Main = styled.div`
  @media (max-height: 32em), (max-width: 32em) {
    font-size: 0.75em;
  }

  @media (min-height: 48em) and (min-width: 48em) {
    font-size: 1.5em;
  }

  @media (min-height: 64em) and (min-width: 64em) {
    font-size: 2em;
  }

  @media (min-height: 96em) and (min-width: 96em) {
    font-size: 2.5em;
  }
`;

const Title = styled.h1`
  color: #666;
  font-family: 'Lobster', cursive;
  font-size: 4em;
  margin: 3em 0 0;
`;

const Message = styled.p`
  color: #ccc;
  font-family: 'Raleway', sans-serif;
  margin-top: 0.5em;
`

const Slide = styled.div`
  margin: auto;

  @media (orientation: landscape) {
    max-width: 90vh;
  }

  @media (orientation: portrait) {
    max-width: 90vw;
  }
`;

const Footer = styled.div`
  position: fixed;
  color: #ccc;
  bottom: 0.5em;
  font-size: 1.25em;
  line-height: 1em;
  text-align: center;
  width: 100%;
  font-family: 'Raleway', sans-serif;

  .Icon {
    vertical-align: top;
    margin-right: 0.5em;
  }
`;

const App: React.FC = () => {
  return (
    <Main className="App">
      <Background/>
      <IntervalChanger fadeIn interval={8e3} transitionTime={500}>
        <Slide id='slide-1'>
          <Title>re-fader</Title>
          <Message>
            The re-fader package provides react components for fading in and out components. It has three main components: Fader, Changer, and IntervalChanger.
          </Message>
        </Slide>
        <Slide id='slide-2'>
          <Title>Fader</Title>
          <Message>
            Fader conrols the opacity and the scaling of the component. It is used internally by the other components of this package.
          </Message>
        </Slide>
        <Slide id='slide-3'>
          <Title>Changer</Title>
          <Message>
            Changer reacts automatically to prop changes: when it receives new children, the old ones are faded out and the the new ones are faded in.
          </Message>
        </Slide>
        <Slide id='slide-4'>
          <Title>IntervalChanger</Title>
          <Message>
            IntervalChanger loops through its children changing the displayed one on a specified interval. This page is implemented with IntervalChanger.
          </Message>
        </Slide>
      </IntervalChanger>
      <Footer>
        <Link color='inherit' href='https://github.com/kangasta/re-fader.git'>
          <GitHub className='Icon' fontSize='inherit' color='inherit'/>
          kangasta / re-fader
        </Link>
      </Footer>
    </Main>
  );
}

export default App;
