import React from "react";
import { useState, useEffect } from "react";

export default function Job(props) {
  const {
    company,
    contract,
    featured,
  
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = props.data;

  let keywords = [role, level, ...languages, ...tools];

  const [icon, setIcon] = useState("");

 

  useEffect(() => {
    
      import(`${logo}`).then((d) => {
       setIcon(d.default);
     });
   
  }, [logo]);

  return (
    <div className={featured? "job-container job-container--borderLeft" : "job-container"}>
      <div className="logo">
        <img src={icon} alt="" />
      </div>
      <div className="par1">
        <div className="company">
          <span className="cname">{company}</span>
          {props.data.new && <span className="new">new!</span>}
          {props.data.featured && <span className="featured">featured</span>}
        </div>

        <div className="position">{position}</div>

        <div className="details">
          <span>{postedAt}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{location}</span>
        </div>
      </div>

      <div className="part2">
        {keywords.map((key, id) => (
          <span onClick={() => props.setKeywords(key)} key={id}>
            {key}
          </span>
        ))}
      </div>
    </div>
  );
}
