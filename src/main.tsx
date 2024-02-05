import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './router/App.tsx';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
