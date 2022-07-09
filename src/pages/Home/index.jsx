import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card'
import './style.css'
const Home = () => {
  const data = useSelector(state => state.data.value)
  const [totalPrice, setTotalPrice] = useState(0)


  useEffect(() => {
    const countTotal = (items) => items.reduce((acc, curr) => curr.status !== "Sonlanmayıb" ? acc + curr.price : acc, 0);
    setTotalPrice(countTotal(data))
  }, [data])




  return (
    <div id='Home' className='p-4'>

      <h4 className='company-name'>Galaxy Restaurant</h4>
      <div className="company-information mb-5">
        <p>10 ildir sizlərlə</p>
      </div>






      <div className="card-wrapper d-flex flex-row flex-wrap gap-3 w-100 justify-content-center">
        <Card
          icon={<i className="fa-solid fa-bell-concierge"></i>}
          value={data.length}
          valueName={'Sifariş sayı'}
        />
        <Card
          icon={<i className="fa-solid fa-sack-dollar"></i>}
          value={`${totalPrice}₼`}
          valueName={'Sonlandırılmış satışlar'}
        />
      </div>
    </div>
  )
}

export default Home