import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import StoryForm from './components/StoryForm';
import StoryList from './components/StoryList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stories: [
        // { name: 'Baradha', body: 'This is Baradha story' },
        // { name: 'Bradys', body: 'this is Bradys story' }
      ]
    };
  }

  addNewStory(story){
    this.setState({stories:this.state.stories.concat(story)});
  }

  render() {
    return (
      <div className="container">

        <div className="page-header"> Bradys FB </div>

        <StoryForm onNewStory={this.addNewStory.bind(this)}/>
        <StoryList stories={this.state.stories}/>

      </div>
    );
  }
}

export default App;
