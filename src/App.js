import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Post from './components/post/post'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/:post_id" component={Post} />
      </Switch>
    </div>
  )
}

export default App
