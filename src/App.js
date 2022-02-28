import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route path='/post/:postId' element={<PostDetails></PostDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
