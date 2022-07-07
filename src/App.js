import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';
import useWindowSize from './hooks/useWindowSize';
import MobileNavbar from './components/MobileNavbar';


function App() {
  const { width } = useWindowSize()




  const RouteElements = routes.map(({ path, component }, i) => <Route path={path} element={component} key={i}></Route>)
  return (
    <div id='RestaurantApp' className={width < 768 && 'active'}>

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
  );
}

export default App;
