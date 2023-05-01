import React from 'react';
import classes from './Projects.module.css';
import agradi_landing from '../images/agradi_landing.png';
import cyop_landing from '../images/cyop_landing.png';
import learnwithhomer_landing from '../images/learnwithhomer_landing.png';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

// Web projects
const cardItem = [
  {
    link: 'https://cyop.io/',
    title: 'CyOp',
    techStack: 'Blockchain, NFT, React, Redux, Unity',
    desc: 'It is a NFT minting website. I developed React fronend and Unity 3D models.',
    image: cyop_landing
  },
  {
    link: 'https://www.agradi.com/',
    title: 'Agradi BV',
    techStack: 'ReactJs, Next.js, Django, Tensorflow',
    desc: 'Online store for horseware goods',
    image: agradi_landing
  },
  {
    link: 'https://learnwithhomer.com/',
    title: 'Learn with Homer',
    techStack: 'React, Next.js, GraphQL, Django',
    desc: 'Leading online education website for kids in US',
    image: learnwithhomer_landing
  },
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <li>
        <a href={cardItem.link} className={classes.card} target='_blank'>
          <img src={cardItem.image} className={classes.card__image} alt='' />
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
                <span className={classes.card__status}>{cardItem.techStack}</span>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
          </div>
        </a>
      </li>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
        {/* <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItemApps.map((item) => {
            return getProjectCard(item);
          })}
        </ul> */}
      </ScrollAnimation>
    </div>
  );
}
