import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';
import useWindowSize from './hooks/useWindowSize';
import MobileNavbar from './components/MobileNavbar';
import { useCallback, useEffect, useState } from 'react';
import { updateData } from './store/data';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const { width } = useWindowSize()



  
  const getData = useCallback(
    async () => {
      const res = await axios.get('http://localhost:3003/orders')
      dispatch(updateData(res.data))
      setIsLoading(false)
    },
    [],
  )

  useEffect(() => {
    getData()
  })

  const RouteElements = routes.map(({ path, component }, i) => <Route path={path} element={component} key={i}></Route>)
  return (
    <>
      {
        isLoading ? 
        <div className='Loading'>
          Yüklənir
        </div>
          :
          <div id='RestaurantApp' className={width < 768 ? 'active' : ''}>

            {
              width > 768 && <Navbar />
            }
            {
              width <= 768 && <MobileNavbar />
            }
            <Routes>
              {RouteElements}
            </Routes>




          </div>
      }
    </>
  );
}

export default App;
