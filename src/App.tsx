import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import GiftList from './pages/GiftList';
import LandingPage from './pages/LandingPage';
import Movies from './pages/Movies';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/giftlist" element={<GiftList />} />
      </Routes>
    </>
  );
}

export default App;
