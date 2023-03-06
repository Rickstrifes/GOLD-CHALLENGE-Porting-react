import React, {useState} from 'react'
// import { Helmet } from 'react-helmet'
import Hero from '../Components/Hero'
import BlankArea from '../Components/BlankArea'
import HasilPencarian from '../Components/HasilPencarian'

const FindCar = () => {
  const [heroVisible, setHeroVisible] = useState(true);
  

  return (
    <div className='find-car'>
      {!heroVisible && <BlankArea />}
      {heroVisible && <Hero />}
      <HasilPencarian setHeroVisible={setHeroVisible} />
    </div>
  )
}

export default FindCar