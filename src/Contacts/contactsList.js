import React, { Component } from 'react';
import { userContacts } from '../utils/contacts';

export default class ContactsList extends Component {
  // renderContacts = () => {
  //
  // }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Numero</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {userContacts(this.props.contacts)}
        </tbody>
      </table>
    );
  }
}
