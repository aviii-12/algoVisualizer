import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SortingVisualizer from './SortingVisualizer/sortingVisualizer';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <SortingVisualizer/>
  </React.StrictMode>,
  document.getElementById('root')
);

