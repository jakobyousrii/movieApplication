import { ThemeProvider } from 'styled-components';
import { Global } from './components/styled-compoents/Global';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from "react";
import { Loading } from './components/styled-compoents/Loading';
// import Home from './pages/Home';
// import Navbar from './components/Navbar';
// import Search from './pages/Search';
// import Show from './pages/Show';
// import TopRatedMovies from './pages/TopRatedMovies.';
// import PopularMovies from './pages/PopularMovies';
// import Categories from './pages/Categories';
// import Footer from './components/Footer';
const Home = React.lazy(() => import("./pages/Home"))
const Navbar = React.lazy(() => import("./components/Navbar"))
const Search = React.lazy(() => import("./pages/Search"))
const Show = React.lazy(() => import("./pages/Show"))
const PopularMovies = React.lazy(() => import("./pages/PopularMovies"))
const TopRatedMovies = React.lazy(() => import("./pages/TopRatedMovies."))
const Categories = React.lazy(() => import("./pages/Categories"))
const Footer = React.lazy(() => import("./components/Footer"))



const theme = {
  colors: {
    header: {
      bg: "#003171",
      text: "white"
    },
    body: {
      bg: "#1F4788",
      text: "white"
    }
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global/>
      <Suspense fallback={<Loading  position="absolute"/>}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/imdb/:imdbId" element={<Show />} />
          <Route path="/top-rated-movies/:page" element={<TopRatedMovies />} />
          <Route path="/popular-movies/:page" element={<PopularMovies />} />
          <Route path="/categories/:id/:name/:page" element={<Categories />} />
        </Routes>
        <Footer/> 
        </Suspense>
    </ThemeProvider>
  );
}

export default App;
