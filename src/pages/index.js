import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import TalkList from './TalkList';
import Quickies from './Quickies';
import AboutMe from './AboutMe';

import { talks } from '../content/talks';
import { workshops } from '../content/workshops';

const IndexPage = () => (
  <Layout>
    <Sidebar/>
    <div className="container-fluid p-0">
      <AboutMe/>
      <TalkList id={'talks'} title={'Upcoming Talks'} events={talks}/>
      <TalkList id={'workshops'} title={'Upcoming Workshops'} events={workshops}/>
      <Quickies/>
    </div>
  </Layout>
);

export default IndexPage;
