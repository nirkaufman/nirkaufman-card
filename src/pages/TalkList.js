import React, { useEffect, useState } from 'react';
import SingleTalk from '../components/SingleTalk';

const TalkList = ({id, title, events}) => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    if(events.length > 0) {
      const sortedTalks = events.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setEventList(sortedTalks)
    }
  }, [events]);

  return (
    <>
      <hr className="m-0"/>
      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id={id}
      >
        <div className="w-100">
          <h2 className="mb-5">{title}</h2>
          {eventList.map((talk, idx) => <SingleTalk key={idx} talk={talk}/>)}
        </div>
      </section>
    </>

  );
};

export default TalkList;
