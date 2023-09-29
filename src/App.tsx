import './App.scss';

import { Route, Routes } from 'react-router-dom';
import { Router } from './routes/router';
import { AppHeader } from './components/AppHeader/AppHeader';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="app-container">
        <Routes>
          {Router.map(({ path, component }) => (
            <Route key={path} path={path} Component={component} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
