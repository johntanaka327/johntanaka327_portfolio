import React, { Component } from 'react';
import classes from './Experience.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Experience extends Component {
  render() {
    return (
      <div className={classes.box} id='experience'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Freelancer <span>11/2017 – present | Remote</span>
                          </h2>
                          <ul>
                            <li>Web - React, Angular, Node.js, Django, ASP.net Core and PHP.</li>
                            <li>Blockchain - smart contracts for NFT minting and token exchange.</li>
                            <li>Mobile App - React Native</li>
                            <li>Desktop App - C/C++, C#, Python, Electron</li>
                          </ul>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Sun-Tech I.T. Solutions Ltd <span>10/2012 – 10/2017 | Hong Kong</span>
                          </h2>
                          <ul>
                            <li>Started as a junior JavaScript developer.</li>
                            <li>Worked as a punctual and passionate employee and made good relations with teammates.</li>
                            <li>Got experience in C++, PHP, Java, Node.js, ASP.net Core and Python Django.</li>
                            <li>Learned Database design and administration in MySQL, PostgreSQL, MongoDB and Oracle.</li>
                            <li>Always loved to learn new technologies including React and Angular.</li>
                            <li>Promoted as a team leader and got charge of projects.</li>
                            <li>Interviewed with clients and analyzed requirements and designed projects.</li>
                            <li>Lead junior developers in Agile team and organized CI/CD.</li>
                          </ul>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Experience;
