import React from 'react';
import { render } from 'react-dom';
import Tabs from './Tabs';
import Events from './Events';
import About from './About';
import Gallery from './Gallery';

class App extends React.Component {
  render () {
    return (
      <Tabs width='100%'
            height={450}
            tabs={[
                    {
                      title: 'Events',
                      component: <Events />
                    },
                    {
                      title: 'About',
                      component: <About />
                    },
                    {
                      title: 'Gallery',
                      component: <Gallery />
                    }
                  ]}
      />
    );
  }
}

render(
  (
    <App />
  ), document.getElementById('app')
);
