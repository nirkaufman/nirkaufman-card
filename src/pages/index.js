import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import { talks } from '../content/talks';
import SingleTalk from '../components/SingleTalk';

const IndexPage = () => (
  <Layout>
    <Sidebar/>
    <div className="container-fluid p-0">
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
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Web developer. Community enthusiast. Organizer of meetups. International public speaker.
            Trainer. Author of books. <br/> Google developer expert in web technologies.
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

      <hr className="m-0"/>

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="talks"
      >
        <div className="w-100">
          <h2 className="mb-5">Upcoming Events</h2>
          {talks.map(talk => <SingleTalk key={talk.id} talk={talk}/>)}
        </div>
      </section>

      <hr className="m-0"/>

      {/*<section*/}
      {/*  className="resume-section p-3 p-lg-5 d-flex align-items-center"*/}
      {/*  id="other"*/}
      {/*>*/}
      {/*  <div className="w-100">*/}
      {/*    <h2 className="mb-5">Education</h2>*/}

      {/*    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">*/}
      {/*      <div className="resume-content">*/}
      {/*        <h3 className="mb-0">University of Colorado Boulder</h3>*/}
      {/*        <div className="subheading mb-3">Bachelor of Science</div>*/}
      {/*        <div>Computer Science - Web Development Track</div>*/}
      {/*        <p>GPA: 3.23</p>*/}
      {/*      </div>*/}
      {/*      <div className="resume-date text-md-right">*/}
      {/*        <span className="text-primary">August 2006 - May 2010</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="resume-item d-flex flex-column flex-md-row justify-content-between">*/}
      {/*      <div className="resume-content">*/}
      {/*        <h3 className="mb-0">James Buchanan High School</h3>*/}
      {/*        <div className="subheading mb-3">Technology Magnet Program</div>*/}
      {/*        <p>GPA: 3.56</p>*/}
      {/*      </div>*/}
      {/*      <div className="resume-date text-md-right">*/}
      {/*        <span className="text-primary">August 2002 - May 2006</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*<hr className="m-0"/>*/}

    </div>
  </Layout>
);

export default IndexPage;
