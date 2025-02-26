import React from 'react'
import Service1 from './service1/Service1'
import Service2 from './service2/Service2'
import { InfiniteMovingCardsDemo } from './service1/infiniteMvDemo'



const Service = () => {
  return (
    <div>
      <Service1 />
      <Service2 />
      <InfiniteMovingCardsDemo/>
    </div>
  )
}

export default Service