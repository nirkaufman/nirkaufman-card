import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import { talks } from '../content/talks';
import SingleTalk from '../components/SingleTalk';
import TalkList from './TalkList';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quickies from './Quickies';
import AboutMe from './AboutMe';

const IndexPage = () => (
  <Layout>
    <Sidebar/>
    <div className="container-fluid p-0">
      <AboutMe/>
      <TalkList/>
      <Quickies/>
    </div>
  </Layout>
);

export default IndexPage;
