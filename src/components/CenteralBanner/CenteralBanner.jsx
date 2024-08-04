import React, { useEffect, useState } from 'react'
import './CenteralBanner.css'
import { axiosInstance } from '../../utils/axiosInstance'

function CenteralBanner() {
  const [Banner, setBanner ] = useState([]);
  useEffect(() => {
      axiosInstance
        .get(`main-banner/`)
        .then((res) => {
            setBanner(res?.data[0])
        })
        .catch((err) => {
          console.log(err);
        });
  }, [])
  return (
    <div className='centeral__banner__wrapper'>
        {Banner.images_for_web && 
          <div className="centeral__banner__img" 
          style={{ backgroundImage: `url(${Banner?.images_for_web[0]?.src})` }}>
            </div>}
    </div>
  )
}

export default CenteralBanner