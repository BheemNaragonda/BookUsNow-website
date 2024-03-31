import Upcomingcard from './Upcomingcard'
import './Upcomingevents.css'
import React, { useState,useEffect }  from 'react'

export default function Upcomingevents() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming');
          const jsonData = await response.json();
          setData(jsonData.events);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  console.log(data)
  return (
    <div className='container-fluid main' >
        <div className='upcoming-container'>
            <h4 className='up-heading'>Upcoming Events</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
          </svg>
        </div>
        <div className='d-flex flex-row flex-wrap'>
        {data && data.length > 0 && data.map((item, index) => (
        
            <Upcomingcard item={item} index={index} key={index}/>
        ))}
        </div>
    </div>
  )
}
