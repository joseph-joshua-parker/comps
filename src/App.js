import { useState, useEffect } from "react";

import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from "./pages/ButtonPage";
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";

const App = ()=>{
    return (
        <div>    
            <Sidebar/>
            <div>
                <Route path="/accordion">
                    <AccordionPage/>
                </Route>

                <Route path="/dropdown">
                    <DropdownPage/>
                </Route>

                <Route path="/buttons">
                    <ButtonPage/>
                </Route>

                <Route path="/modal">
                    <ModalPage/>
                </Route>

                <Route path="/table">
                    <TablePage/>
                </Route>
            </div>
        </div>
    )
}

export default App;