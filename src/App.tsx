import './App.scss';

import { Route, Routes } from 'react-router-dom';
import { Router } from './routes/router';

function App() {
  return (
    <div className="">
      <Routes>
        {Router.map(({ path, component }) => (
          <Route key={path} path={path} Component={component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
