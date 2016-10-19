import React, { Component } from 'react';
import { renderContacts } from '../utils/contacts';

export default class ContactsList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {renderContacts(this.props.contacts)}
        </tbody>
      </table>
    );
  }
}
