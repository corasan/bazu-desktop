import fb from '../../firebase.config.js';
import React, { Component } from 'react';

export function renderContacts(contacts) {
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
