import fb from '../../firebase.config.js';
import { browserHistory } from 'react-router';

let replacePath = (nextState, replace, pathname) => {
  replace({
    pathname: pathname,
    state: { nextPathname: nextState.location.pathname }
  });
}


export const userLogin = (email, password, user) => {
  fb.auth().signInWithEmailAndPassword(email, password)
  .then((user) => browserHistory.push('/'))
  .catch((err) => console.log(err.message));
}

// Redirect user based on if user is or isn't authenticated
export const requireAuth = (nextState, replace) => {
  fb.auth().onAuthStateChanged(function(user) {
    if (user) {
      replacePath(nextState, replace, '/');
    } else {
      replacePath(nextState, replace, '/login');
    }
  });
}

export const userLogout = () => {
  fb.auth().signOut()
  .then(() => browserHistory.push('/login'));
}
