// import { Provider } from 'react-redux'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap";
import "../styles/global.scss";
import store from '../state/store';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}