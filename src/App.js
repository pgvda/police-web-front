import logo from './logo.svg';
import './App.css';
import LoginPage from './view/LoginPage/LoginPage';
import DrawerPage from './Layout/DrawerPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DashbordPage from './view/DashBord/DashBordPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path="/" element={<DrawerPage />}>
            <Route path='dashbord' element={<DashbordPage/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
