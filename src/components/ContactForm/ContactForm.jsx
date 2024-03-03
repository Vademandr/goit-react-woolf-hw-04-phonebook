import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form, Label, Input, ButtonForm } from './ContactForm.styled';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let NameInputId = nanoid();
  let NumberInputId = nanoid();

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={NameInputId}>
        Name
        <Input
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          placeholder="Name"
          id={NameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor={NumberInputId}>
        Number
        <Input
          value={number}
          onChange={handleInputChange}
          type="tel"
          name="number"
          placeholder="Number"
          id={NumberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </Form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
};