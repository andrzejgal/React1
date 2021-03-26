import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Test from './components/test-component/test.js';
const myList = ['ziemniaki', 'chleb', 'mleko', 'ser', 'kiełbasa'];

ReactDOM.render(
  <React.StrictMode>
    <Test myList={myList}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


