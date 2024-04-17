import React, { useEffect, useState } from "react";
import Job from "./Job";

export default function Jobs({ data, setKeywords, keywords }) {
  console.log(data);

const [filterData,setfilteredData]=useState([]);

const modifiedData =()=>{
  if(keywords.length>0){

const newData= filterData.filter(d=>{
  return(
    keywords.every(key=>{
      return(
        d.role=== key ||
        d.level===key ||
        d.languages.includes(key) ||
        d.tools.includes(key)
      )
    })
  )
})
setfilteredData(newData);
  }else{
    setfilteredData(data);
  }
}

useEffect(()=>{
  modifiedData()
}, [keywords]);

  return (
    <div className="jobs">
      {filterData.map((d) => {
        return <Job data={d} key={d.id} setKeywords={setKeywords} />;
      })}
    </div>
  );
}
