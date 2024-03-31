import'./Banner.css'
import React, {useState,useEffect} from 'react'
import bannerImage1 from '../../assets/images/event1.svg';
import bannerImage2 from '../../assets/images/event2.svg';

export default function Banner() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');
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
<div class="container-fluid Banner-Section-bg-container" id='banner'>
  <div class="row flex-row justify-content-center ">
    <div class="col-md-12">
      <div class="Banner-Section-Text-Container d-flex flex-column justify-content-center align-items-center">
        <h1 class="Banner-Section-Heading text-center">Discover Exiting Events Happening Near You- Stay Tuned for Updates </h1>
        <p class="Banner-Section-Paragraph text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
      </div>
    </div>
  </div>
  <div className='events-container'>
    <div className='d-flex flex-row justify-content-between '>
      <h4 className="Banner-Section-Heading">Recommended shows </h4>
      <p class="Banner-Section-Paragraph text-decoration-underline">see all</p>
    </div>
    <div className='mainContainer1'>
    {data && data.length > 0 && data.map((item, index) => (
  <div key={index} className='image-container' style={{ backgroundImage: `url(${index % 2 === 0 ? bannerImage1 : bannerImage2})` }}>
    <div className='d-flex flex-row justify-content-between'>
      <div className="d-flex flex-column">
        <h4 className='Banner-Section-Paragraph'>{item.eventName}</h4>
        <p className='Banner-Section-Paragraph'>{item.cityName}</p>
      </div>
      <div className="d-flex flex-column justify-content-end align-items-end">
        <h5 className='Banner-Section-Paragraph'>{item.date.substring(0, 10)}</h5>
        <p className='Banner-Section-Paragraph'>{item.weather} | {Math.round(item.distanceKm)}</p>
      </div>
    </div>
  </div>
))}
    </div>
  </div>
</div>
  
)
}
