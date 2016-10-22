import fb from '../../firebase.config.js';
import React, { Component } from 'react';
const auth = fb.auth();
const db = fb.database();

export const renderContacts = (contacts) => {
  let arr = [];
  let counter = 1;

  for(let i in contacts) {
    arr.push(
      <tr key={counter}>
        <td>{counter++}</td>
        <td>{contacts[i].name}</td>
        <td>{contacts[i].email}</td>
        <td>{contacts[i].number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}</td>
      </tr>
    )
  }

  return arr;
}
// Get user contacts object
export const getContacts = (callback) => {
  auth.onAuthStateChanged((user) => {
    if(user) {
      db.ref(`contacts/${user.uid}`).on('value', (contacts) => {
        callback(contacts.val());
      });
    }
  });
}

export const saveContact = (name, email, number) => {
  auth.onAuthStateChanged((user) => {
    if(user) {
      db.ref(`contacts/${user.id}/${name}`).set({
        name: name,
        email: email,
        number: number
      });
    }
  }
}
