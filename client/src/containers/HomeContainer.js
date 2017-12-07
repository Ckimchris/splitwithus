import React from 'react';
import ServicesContainer from './ServicesContainer';
<<<<<<< HEAD

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const HomeContainer = (props) => {
  return (
    <div>
      <ServicesContainer type={'Video'} services={['Netflix', 'Hulu']} />
      <ServicesContainer type={'Music'} services={['Spotify', 'Pandora']} />
=======
import Header from './../components/Header';

const style = {
  paddingLeft: '50px'
};

const HomeContainer = (props) => {
  return (
    <div>
      <Header />
      <div style={style}>
        <ServicesContainer type={'Video'} services={['Netflix', 'Hulu']} />
        <br /><br />
        <ServicesContainer type={'Music'} services={['Spotify', 'Pandora']} />
      </div>
>>>>>>> 701ff79cbf3ea2cc891f21317b32448dccefb214
    </div>
  );
};

export default HomeContainer;
