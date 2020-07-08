import React from 'react';
import IconLink from './components/IconLink';
import { Tabs } from './components/Tabs';

import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <div className="Main">
        <Tabs>
          <div className="Inner">
            <h1>Jason Chiang</h1>
            <p>Software Developer</p>
            <hr />
            <Tabs.Panel label="Connect">
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
            <Tabs.Panel label="Experience">
              <ul className="ExperienceTabContainer">
                <li>
                  <strong>Combat Medic </strong>@ Army National Guard
                </li>
                <i>Jun 2015 - Present</i>
                <li>
                  <strong>Software Developer</strong> @ Station
                  Casinos
                </li>
                <i>Aug 2019 - Mar 2020</i>
                <li>
                  <strong>Software Developer </strong>@ Chingu
                </li>
                <i>Mar 2019 - May 2019</i>
                <li>
                  <strong>Software Developer </strong>@ Aided Trade
                </li>
                <i>Jan 2019 - Mar 2019</i>
              </ul>
            </Tabs.Panel>
            <Tabs.Panel label="About Me">
              Hey there! My name is Jason and I am a self-taught
              software engineer based in Las Vegas, NV. I decided to
              pursue my curiosity for building things on the web.
            </Tabs.Panel>
          </div>
          <div className="TabLabelContainer">
            <Tabs.Tab label="Connect">
              Connect{' '}
              <span role="img" aria-label="Hands together">
                🙌
              </span>
            </Tabs.Tab>
            <Tabs.Tab label="Experience">
              Experience{' '}
              <span role="img" aria-label="Boy behind computer">
                👨‍💻
              </span>
            </Tabs.Tab>
            <Tabs.Tab label="About Me">
              About Me{' '}
              <span role="img" aria-label="Emoji with shades">
                😎
              </span>
            </Tabs.Tab>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
