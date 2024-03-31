import './Upcomingevents.css';
import React from 'react';
import bannerImage1 from '../../assets/images/u1.svg';
import bannerImage2 from '../../assets/images/u2.svg';
export default function Upcomingcard(props) {
  const {item,index}=props
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="upcoming-event-Card shadow p-3 mb-2 me-2 mt-2">
        <div className='upcoming-event-imagecontainer'>
          <img src={index % 2 === 0 ? bannerImage1 : bannerImage2} className="upcoming-event-Card-Image" />
          <div className='upcoming-event-date'>
            <p className='upcoming-event-datetext'>{item.date.substring(0, 10)}</p>
          </div>
        </div>
        <h4 className="upcoming-event-Title pt-2">{item.eventName}</h4>
        <div className='d-flex flex-row justify-content-between'>
          <div className='d-flex flex-row'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M8 0a7 7 0 0 1 5.946 10.617l-4.633 4.633a1 1 0 0 1-1.414 0l-4.633-4.633A7 7 0 0 1 8 0zm0 2a5 5 0 1 0 0 10A5 5 0 0 0 8 2z"/>
</svg>
          <p className="upcoming-event-place ">{item.cityName}</p>
          </div>
          <p className="upcoming-event-place">{item.weather} | {Math.round(item.distanceKm)} km</p>
        </div>
      </div>
    </div>
  );
}
