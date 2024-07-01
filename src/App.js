import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Layout/Header';
import AppRoutes from './routes/Routes';

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-r from-[#000C77] via-[#4354E4] to-[#000C77]'>
        <div className="px-8 sm:px-20 flex flex-col pb-8">
          <Header />
          <AppRoutes />
        </div>
      </div>
    </Router >
  );
};

export default App;
