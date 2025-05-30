import { Suspense } from "react";
import "./App.css";
import Website from "./pages/website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/layout"
import Properties from "./pages/properties/properties";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Property from "./pages/Property/Property";



function App() { 

  const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>

     <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element ={<Layout/>}>
         <Route path="/" element={<Website/>}/>
         <Route path="/properties" >
         <Route index element={<Properties/>}/>
          <Route path=":propertyId" element={<Property/>}/>
        </Route>
        </Route>
       
      </Routes>
      </Suspense>
    </BrowserRouter>
    <ToastContainer/>
    <ReactQueryDevtools initialIsOPen={false}/>
    </QueryClientProvider>
   
  ); 
}

export default App;
