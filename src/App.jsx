import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import Counter from './Counter';
import LikeButton from './LikeButton';
import UseName from './UseName';
import PLusMinus from './PLusMinus';
import OnChange from './OnChange';
import ColorPicker from './ColorPicker';
import UpdaterFunc from './UpdaterFunc';
import UpdateObject from './UpdateObject';
import UpdateArray from './UpdateArray';
import ArrayAndObjectUpdate from './ArrayAndObjectUpdate';
import UseEffect from './UseEffect';
import DigitalClock from './DigitalClock';

function App() {

  return (
    <>
      {/* <h1>State in React</h1>
      <Counter />
      &nbsp; &nbsp;
      <LikeButton />

      <UseName />
      &nbsp; &nbsp;
      <PLusMinus />

      &nbsp; &nbsp;
      <OnChange />

      &nbsp; &nbsp;
      <ColorPicker/>

      &nbsp; &nbsp;
      <UpdaterFunc />

      &nbsp; &nbsp;
      <UpdateObject />

      &nbsp; &nbsp;
      <UpdateArray />

      &nbsp; &nbsp;
      <ArrayAndObjectUpdate />

      &nbsp; &nbsp;
      <UseEffect /> */}


      <DigitalClock />

    </>
  )
}

export default App;
