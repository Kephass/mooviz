import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Movies from './pages/Movies';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
