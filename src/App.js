import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Test';
import UserProfile from './components/UserPage';
import Invest from './components/Invest';
import LearnInvesting from './components/Test';
import Dashboard from './components/Dashboard';

function App() {
  return (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/user" element={<UserProfile/>} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/test" element={<Dashboard />} />
          </Routes>
      );
    }

export default App;
