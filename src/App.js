import logo from './logo.svg';
import './App.css';
import LoginPage from './view/LoginPage/LoginPage';
import DrawerPage from './Layout/DrawerPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DashbordPage from './view/DashBord/DashBordPage';
import UserManagement from './view/UserManagement/UserManagement';
import UserDetails from './view/UserManagement/UserDetails';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path="/" element={<DrawerPage />}>
            <Route path='dashbord' element={<DashbordPage/>}/>
            <Route path='userManagement' element={<UserManagement/>}/>
            <Route path='userdetails' element={<UserDetails/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
