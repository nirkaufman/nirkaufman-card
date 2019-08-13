import React from 'react';
import { talks } from '../content/talks';
import SingleTalk from '../components/SingleTalk';

const TalkList = () => {

  const sortedTalks = talks.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <>
      <hr className="m-0"/>
      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="talks"
      >
        <div className="w-100">
          <h2 className="mb-5">Upcoming Events</h2>
          {sortedTalks.map((talk, idx) => <SingleTalk key={idx} talk={talk}/>)}
        </div>
      </section>
    </>
  );
};

export default TalkList;