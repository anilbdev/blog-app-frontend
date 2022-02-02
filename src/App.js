import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/articles' element={<ArticlesList/>} />
          <Route path='/:id' element={<ArticlePage/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
