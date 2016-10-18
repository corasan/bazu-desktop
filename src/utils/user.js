import fb from '../../firebase.config.js';
import { browserHistory } from 'react-router';

export function userLogin(email, password) {
  fb.auth().signInWithEmailAndPassword(email, password)
  .then((user) => browserHistory.push('/'))
  .catch((err) => console.log(err.message));
}
