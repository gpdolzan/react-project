import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { robots } from './Robots'
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card 
        id={robots[0].id}
        name={robots[0].name}
        username={robots[0].username}
        email={robots[0].email}
      />
      <Card 
        id={robots[1].id}
        name={robots[1].name}
        username={robots[1].username}
        email={robots[1].email}
      />
      <Card 
        id={robots[2].id}
        name={robots[2].name}
        username={robots[2].username}
        email={robots[2].email}
      />
      <Card 
        id={robots[3].id}
        name={robots[3].name}
        username={robots[3].username}
        email={robots[3].email}
      />
      <Card 
        id={robots[4].id}
        name={robots[4].name}
        username={robots[4].username}
        email={robots[4].email}
      />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
