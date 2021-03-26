import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';
import reportWebVitals from './reportWebVitals';
import Post from './Post';
let post ={
  title: 'Lilianas blog',
  author:'Liliana',
  body: 'my first React blog',
  comments: ['Comment 1', 'Comment 2', 'Comment 3']

}

ReactDOM.render(
  <React.StrictMode>
    <Hello name={'Liliana'} age={100}/>
    <Post  post={post}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
