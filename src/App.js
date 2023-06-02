import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie/Movie';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/routes/Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
