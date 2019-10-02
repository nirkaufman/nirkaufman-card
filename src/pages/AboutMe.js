import React from 'react';
import config from '../../config';

const AboutMe = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          {config.firstName}
          <span className="text-primary">{config.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {config.address} · {config.phone}
          <a href={`mailto:${config.email}`}>{config.email}</a>
        </div>
        <p className="lead mb-5">
          Web developer. Community enthusiast. Organizer of meetups. International public speaker.
          <br/>Trainer. Author of books. Google developer expert in web technologies.
          <br/>
          When I'm not coding I make music, and vegan food.
        </p>

        <div className="social-icons">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;