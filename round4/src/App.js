import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Articles from './components/Articles'
import Article from './components/Article'
import Layout from './Layout'
import Login from './components/Login'
import Mypage from './components/Mypage'
import NotFound from './components/Notfound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
