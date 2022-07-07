import React from 'react'
import Card from '../../components/Card'
import './style.css'
const Home = () => {
  return (
    <div id='Home' className='p-4'>

      <h4 className='company-name'>Galaxy Restaurant</h4>
      <div className="company-information mb-5">
        <p>10 ildir sizlərlə</p>
      </div>






      <div className="card-wrapper d-flex flex-row flex-wrap gap-3 w-100 justify-content-center">
        <Card
          icon={<i class="fa-solid fa-bell-concierge"></i>}
          value={'64'}
          valueName={'Sifariş sayı'}
        />
        <Card
          icon={<i class="fa-solid fa-sack-dollar"></i>}
          value={'2300₼'}
          valueName={'Sonlandırılmış satışlar'}
        />
      </div>
    </div>
  )
}

export default Home