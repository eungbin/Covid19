import React from 'react';
import './css/App.css';
import Header from './components/Header';
import BoxContainer from './components/BoxContainer';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import NewsList from './components/NewsList';

const App = () => {

  return (
    <div className="container">
      <Header />
      <BoxContainer />
      <BarChart />
      <LineChart />
      <NewsList />
    </div>
  );
};

export default App;