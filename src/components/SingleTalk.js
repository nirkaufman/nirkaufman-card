import React from 'react';

const SingleTalk = ({talk}) => {
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{talk.title}</h3>

        <div className="subheading mb-3">{talk.event} • <a href={`https://www.google.com/maps/place/${talk.location.replace(" ","+")}`} target="_blank">{talk.location}</a></div>
        <p>{talk.abstract}</p>
        <a href={talk.link} target="_blank">Event details on {talk.event} website</a>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{talk.date}</span>
      </div>
    </div>

  );
};

export default SingleTalk;