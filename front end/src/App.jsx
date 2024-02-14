

import * as React from 'react'
import MyResponsivePie from './pages/dashboard'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Suspense,lazy } from "react"
import Spinner from "./components/Spinner"
import Login from './pages/loginpage'
import Home from './pages/Home'
import Register from './pages/register'
import EventRegistrationForm  from './pages/Bookings'
import PaymentPage from './pages/payment'
import CustomTable from './components/table'
const LazyAbout=lazy(()=>import ("./pages/about"))
const LazyContact=lazy(()=>import("./pages/contact"))
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Suspense fallback={<Spinner/>
      }><Login/></Suspense>
    },
    {
      path:'/pay',
      element:<Suspense fallback={<Spinner/>
      }><PaymentPage/></Suspense>
    },
    {
      path:'/home',
      element:<Suspense fallback={<Spinner/>
      }><Home/></Suspense>
    },
    {
      path:'/about',
      element:<Suspense fallback={<Spinner/>
    }><LazyAbout /></Suspense>
      },
      {
        path:'/contact',
        element:<Suspense fallback={<Spinner/>
      }><LazyContact/></Suspense>
        },
        {
          path:'/register',
          element:<Suspense fallback={<Spinner/>
        }><Register/></Suspense>
      },
      {
        path:'/book',
        element:<Suspense fallback={<Spinner/>
      }><EventRegistrationForm /></Suspense>
    },
    {
      path:'/table',
      element:<CustomTable />
      // element:<Suspense fallback={<Spinner/>
    // }><CustomTable/></Suspense>
  },
  
  {
    path:'/dash',
    element:<MyResponsivePie />
}
          
  ])
  return (
    
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>

  )
}

export default App
