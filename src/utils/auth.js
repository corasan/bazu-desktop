import fb from '../../firebase.config.js';
import { browserHistory } from 'react-router';

let replacePath = (nextState, replace, pathname) => {
  replace({
    pathname: pathname,
    state: { nextPathname: nextState.location.pathname }
  });
}


export const userLogin = (email, password) => {
  fb.auth().signInWithEmailAndPassword(email, password)
  .then((user) => browserHistory.push('/'))
  .catch((err) => console.log(err.message));
}

export const requireAuth = (nextState, replace) => {
  let user = fb.auth().currentUser;

  if (!user) {
    replacePath(nextState, replace, '/login');
  }
}

export const isAuth = (nextState, replace) => {
  let user = fb.auth().currentUser;

  if (user) {
    replacePath(nextState, replace, '/');
  }
}
