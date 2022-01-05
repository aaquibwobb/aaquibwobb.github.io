import React from 'react';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import HomePage from "../src/components/StoreSection/ProductPage/HomePage";
import ProductPage from '../src/components/StoreSection/ProductDescription/ProductPage';
import {InfluencerNavigation} from '../src/components/InfuencerApplication/InfluencerNavigation';
import {TopNavigation} from '../src/components/InfuencerApplication/Milestone/TopNavigation'

ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
