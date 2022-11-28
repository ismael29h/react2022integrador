import './App.css';
import Inicio from './paginas/Inicio'
import Error404 from './componentes/Errores/404';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <Error404 />
  },
  {
    path: "/buscador",
    element: <Inicio />,
    errorElement: <Error404 />
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
