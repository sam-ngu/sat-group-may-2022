import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import logo from './logo.svg';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: '/contact',
      element: <Contact/>
      
    }
  ]);

  return (
    <div>



      <RouterProvider router={router} />


    </div>
  );
}

export default App;
