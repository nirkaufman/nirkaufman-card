import React from 'react';
import { talks } from '../../content/talks';
import SingleTalk from './SingleTalk';

const TalkList = () => {

  const sortedTalks = talks.sort( (a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

  return (
    <div className="w-100">
      <h2 className="mb-5">Upcoming Events</h2>
      {sortedTalks.map((talk, idx) => <SingleTalk key={idx} talk={talk}/>)}
    </div>

  );
};

export default TalkList;