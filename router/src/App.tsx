import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/Home.page'
import { RQSuperHeroesPage } from './Components/RQSuperHeroes.page'
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { RQSuperHeroesPageTest } from './Components/RQSuperHeroesTest';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
        <QueryClientProvider client={queryClient}>
        <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
          </li>
          <li>
            <Link to='/rq-super-heroes_test'>RQ Super Heroes Test</Link>
          </li>
        
        </ul>
      </nav>
      <Routes>
      

        <Route path='/rq-super-heroes' element = {<RQSuperHeroesPage/> }>
        </Route>

        <Route path='/rq-super-heroes_test' element = {<RQSuperHeroesPageTest/> }>
        </Route>
        <Route path='/' element = {<HomePage />}>
    
        </Route>
      </Routes>


    
      <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>

    </div>
  );
}

export default App;
