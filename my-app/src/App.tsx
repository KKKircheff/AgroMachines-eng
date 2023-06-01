import React, {useEffect} from 'react';
import './App.scss';
import AOS from 'aos';
import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';


export interface Item {
  name: string;
  url?: string;
  children?: Item[];
}

const items: Item[] = [
  { name: 'за нас', url: '/' },
  { name: 'поливни макари', url: '/' },
  { name: 'високонапорни помпи', url: '/' },
  { name: 'галерия', url: '/gallery' },
  { name: 'контакт', url: '/contact' },
];
function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.refresh();
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Navigation items={items} />}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
