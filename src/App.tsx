import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Blank Componants/Profile';
import Reports from './Components/Blank Componants/Reports';
import Schedule from './Components/Blank Componants/Schedule';
import Insurance from './Components/Blank Componants/Insurance';
import Statement from './Components/Blank Componants/Statement';
import './App.css';
import SidebarNavbar from './Components/SidebarNavbar';
library.add(fas);

class App extends React.Component {
  render() {
    return (
      <SidebarNavbar>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/statements' element={<Statement />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/insurance' element={<Insurance />} />
        </Routes>
      </SidebarNavbar>
    );
  }
}

export default App;
