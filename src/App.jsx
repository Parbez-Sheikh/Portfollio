
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayoutOne from './Layouts/LayoutOne';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfollio from './pages/Portfollio';
import All from './pages/All';
import Brand from './pages/Brand';
import Design from './pages/Design';
import Photo from './pages/Photo';
import Blog from './pages/Blog';
import Contract from './pages/Contract';

function App() {

 const router=createBrowserRouter([
  {
    path:'/',
    element:<LayoutOne></LayoutOne>,
  },
  {
    path:'/about',
    element:<About></About>,
  },
  {
    path:'/resume',
    element:<Resume></Resume>,

  },
  {
    path:'/portfolio',
    element:<Portfollio></Portfollio>,
    children:[
      {
        path:'/portfolio/',
        element:<All></All>,

      },
      {
        path:'/portfolio/brand',
        element:<Brand></Brand>,
      },
      {
        path:'/portfolio/design',
        element:<Design></Design>,
      },
      {
        path:'/portfolio/photo',
        element:<Photo></Photo>,
      },
    ]

  },
  {
    path:'/blog',
    element:<Blog></Blog>,
  },
  {
    path:'/contact',
    element:<Contract></Contract>,

  },


 ])

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
