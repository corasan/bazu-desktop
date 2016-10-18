import fb from '../../firebase.config.js';

export function userLogin(email, password) {
  fb.auth().signInWithEmailAndPassword(email, password)
  .then((user) => console.log(user))
  .catch((err) => console.log(err.message));
}
