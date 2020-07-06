import React from 'react';
import IconLink from './components/IconLink';
import { Tabs } from './components/Tabs';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="Main">
        <Tabs>
          <div className="Inner">
            <h1>Jason Chiang</h1>
            <p>Self Taught Software Engineer</p>
            <hr />
            <Tabs.Panel label="a">
              <ul className="IconBar">
                <li>
                  <IconLink
                    icon="linkedin"
                    href="https://www.linkedin.com/in/jasonchiangjc7j/"
                  />
                </li>
                <li>
                  <IconLink
                    icon="github"
                    href="https://github.com/Jc7j"
                  />
                </li>
                <li>
                  <IconLink
                    icon="email"
                    href="mailto:chiangjason19@gmail.com?subject="
                  />
                </li>
              </ul>
            </Tabs.Panel>
          </div>
          <div className="TabLabelContainer">
            <Tabs.Tab label="a">Connect</Tabs.Tab>
            <Tabs.Tab label="b">Experience</Tabs.Tab>
            <Tabs.Tab label="c">About Me</Tabs.Tab>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
