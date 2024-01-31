/**
 * React import
 */
import ReactDOM from 'react-dom/client';
/**
 * React Redux
 */
import { Provider } from 'react-redux';
/**
 * Component import
 */
import App from './App'; 
import store from './components/store';
/**
 * Css import
 */
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
