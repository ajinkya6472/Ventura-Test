import logo from './logo.svg';
import './App.css';
import Cards from './component/ListIPO';
import { ipoData } from './constant';
import Details from './component/Details';
import Navigator from './component/Navigator';
import Timeline from './component/Timeline';
import About from './component/About';
import IpoDetails from './component/IpoDetails';
import ListIPO from './component/ListIPO';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Cards data={ipoData} /> */}
      {/* <Details data={ipoData} /> */}
      {/* <Navigator /> */}
      {/* <Timeline /> */}
      {/* <About /> */}
      {/* <IpoDetails data={ipoData} /> */}
      <Routes>
        <Route path="/home" element={<ListIPO data={ipoData} />} />
        <Route path="/details" element={<IpoDetails data={ipoData} />} />
      </Routes>
    </div>
  );
}

export default App;
