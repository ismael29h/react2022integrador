import './App.css';
import Inicio from './paginas/Inicio'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/buscador",
    element: <Inicio />,
  },
]);



function App() {
  return (
    <div className="App">
      {/* INICIO */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
