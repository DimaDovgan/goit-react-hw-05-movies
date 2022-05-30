import './App.css';
import { lazy ,Suspense} from 'react';
import { Navigation } from "./component/navigation/Navigation.jsx"
import {  Routes, Route } from "react-router-dom";
import { SpinnerDiamond } from 'spinners-react';



const ParamsFilm= lazy(() => import("./component/film/Params-Film"));
const FilmPage= lazy(() => import("./component/film/film-page.jsx"));
const HomePage = lazy(() => import("./views/Home-page.jsx"));
const MoviesPage = lazy(() => import("./views/Movies-page"));
function App() {
  
  return (<div>
    <Navigation />
    <Suspense fallback={<SpinnerDiamond size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />}>
    <Routes>
      <Route exact="true" path="/" element={<HomePage />} />
      <Route exact="true" path="/movies" element={<MoviesPage />} />
      <Route path='/movies/:filmId' element={<FilmPage />} >
      <Route path='/movies/:filmId/:params' element={<ParamsFilm />} /></Route>
      
      </Routes>
      </Suspense>
    
  </div>
    );
}

export default App;
