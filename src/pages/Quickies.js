import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/default-highlight';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { quickies } from '../content/quickies';

const Quickies = () => {
  return (
    <>
      <hr className="m-0"/>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="quickies"
      >
        <div className="w-100">
          <h2 className="mb-5">Quickies</h2>

          {quickies.map((quicky, index) => (
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5" key={index}>
              <div className="resume-content">
                <h3 className="mb-0">{quicky.title}</h3>
                <div className="mt-3 mb-3">{quicky.description}</div>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {quicky.code}
                </SyntaxHighlighter>
                <a href={quicky.link} target={'_blenk'}>Click here to learn more</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Quickies;