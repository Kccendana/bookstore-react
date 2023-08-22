import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './pages/Home';
import CategoriesPage from './pages/Categories';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  </>
);

export default App;
