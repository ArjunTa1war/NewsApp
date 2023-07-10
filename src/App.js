import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress : 1
  }
  setProgress = (progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
        <Routes>
        <Route exact path="/" element = {<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "general" pageSize={5} country="in" category="general"/>} />
        <Route exact path="/business" element = {<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "business" pageSize={5} country="in" category="business"/>} />
        <Route exact path="/entertainment" element = {<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "entertainment" pageSize={5} country="in" category="entertainment"/>} />
        <Route exact path="/general" element = {<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "general" pageSize={5} country="in" category="general"/>} />
        <Route exact path="/health" element = {<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "health" pageSize={5} country="in" category="health"/>} />
        <Route exact path="/science" element = {<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "science" pageSize={5} country="in" category="science"/>} />
        <Route exact path="/sports" element = {<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "sports" pageSize={5} country="in" category="sports"/>} />
        <Route exact path="/technology" element = {<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  key = "technology" pageSize={5} country="in" category="technology"/>} />
        </Routes>      
        </Router>
      </div>
    )
  }
}



///here the case is that if we just change the route then componenet think that news is already there
//why need to rerender it but if we pass the key value to it then it will always rerender the component
//which is required but the key must also be unique

// in environment variables we should always start with REACT_APP_