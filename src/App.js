import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import Error from './pages/Error';
import Header from './componenets/Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/articles-list' element={<ArticlesList/>} />
          <Route path='/article/:name' element={<ArticlePage/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
