import React from 'react'
import Home from '../Pages/home';
import { Routes as BRRoutes, Route } from "react-router-dom";
import InfoPage from '../Pages/infoPage';


export default function Router() {
  return (
    <div>
      <BRRoutes>
         <Route path="/" element={<Home/>} />
         <Route path="/infopage" element={<InfoPage/>} />
      </BRRoutes>
    </div>
  )
}
