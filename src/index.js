import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// const fallBack = <div className='text-center m-auto'>
//   <h5>Loading...</h5>
// </div>

ReactDOM.render(
  <Suspense fallback={null}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
