import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { LoginPage, MovieDetailsPage, MovieLookUpPage, RegisterPage } from './pages';

function App() {
  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<MovieLookUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/details' element={<MovieDetailsPage/>}/>
        <Route path='/signup' element={<RegisterPage/>}/>
      </Routes>
    </>
  );
}

export default App;
