import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import SearchPage from './Pages/SearchPage';
import SingleMovie from './Pages/SingleMovie';
import Search from './Components/Search';
import Favourites from './Pages/Favourites';


function App() {
    // Состояние для отображения или скрытия поисковой строки
  const [showSearch, setShowSearch] = useState(false);
  //для плагинов
  const [currentPage, setCurrentPage] = useState(1);
    // Состояние для списка избранных фильмов, загруженных из локального хранилища

  const [watchList, setWatchList] = useState(JSON.parse(localStorage.getItem('watchList')) || []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar setShowSearch={setShowSearch} watchList={watchList} />
        <Routes>

          <Route path='/' element={<Home setWatchList={setWatchList} watchList={watchList} />} />
          <Route path='/search/:query' element={<SearchPage setCurrentPage={setCurrentPage} currentPage={currentPage} setWatchList={setWatchList} watchList={watchList} />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='/favourites' element={<Favourites watchList={watchList} setWatchList={setWatchList} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
