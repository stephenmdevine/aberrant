import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import { CharacterProvider } from './context/CharacterContext';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <CharacterProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </CharacterProvider>
  );
}

export default App;
