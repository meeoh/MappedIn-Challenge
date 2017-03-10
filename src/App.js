import React from 'react';
import './App.css';

//axios for http requests
var axios = require("axios");


var App = React.createClass({

  //set initial state to empty array
  getInitialState: function() {
    return {data: []};
  },

  //make request when component mounts
  componentDidMount: function() {
    axios.get("https://api.github.com/users/axiomaticdesign/starred")
      .then(res => {
        //save it in state
        this.setState({ data: res.data })
        console.log(res);
      });
  },

  //render function
  //go through all objects in the state array, and create an li for each
  render: function() {
    return (
      <div>
      <h1>Starred repos for axiomaticdesign</h1>
      <ul>        
        {this.state.data.map((obj,i) => {
          return (
            <li className="repo" key={i}>
              <h2>
                <i className="fa fa-star"></i>
                <a href={obj.html_url}>{obj.full_name}</a>
              </h2>
              <p>{obj.description}</p>
              <div className="counters">
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <a href={obj.stargazers_url}>{obj.stargazers_count}</a>
                </div>
                <div className="forks">
                  <i className="fa fa-code-fork"></i>
                  <a href={obj.forks_url}>{obj.forks_count}</a>
                </div>
              </div>
               
            </li>);
        })}
      </ul>
      </div>)
  }
});

export default App;

