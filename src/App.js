import React from 'react';
import AppRoutes from './routes/AppRouter'; 

const App = () => {
  return (
    <div id="canvas">
      <div id="box_wrapper">
        <AppRoutes/>
      </div>
    </div>
  );
};

export default App;
