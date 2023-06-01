import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import './App.scss';
import AOS from 'aos';
import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
// import { Item } from './application-data/navbar-config';
import { items } from './application-data/navbar-config';

export type ToggleContextType = {
        toggleView: boolean;
         setToggleView: React.Dispatch<React.SetStateAction<boolean>>;
    };

    const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

    export const useToggleContext = (): ToggleContextType | undefined => {
      return useContext(ToggleContext);
    };

    
    function App() {
      const [toggleView, setToggleView] = useState(false);
      
      useEffect(() => {
        AOS.init({ duration: 800,
                    offset: 50, 
                  });
        AOS.refresh();
        window.onbeforeunload = function () {
          window.scrollTo(0, 0);
        }
      }, []);
      
      
      return (
        <div className="App">
      <ToggleContext.Provider value={{ toggleView, setToggleView }}>
        <Routes>
          <Route path='/' element={<Navigation items={items} />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ToggleContext.Provider>
    </div>
  )
}

export default App;

export { ToggleContext };