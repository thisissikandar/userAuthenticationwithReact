import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddMovies from './pages/AddMovies';
import PageNotFound from './pages/PageNotFound';
import { MovieProvider } from './store/store';

const router = createBrowserRouter([{ path: '/', element: <Home />, errorElement: <PageNotFound/> }, { path: '/login', element: <Login /> }, { path: '/signup', element: <Signup /> }, { path: '/addmovies', element: <AddMovies /> }, {path:'/404', element:<PageNotFound/>}])

function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;
