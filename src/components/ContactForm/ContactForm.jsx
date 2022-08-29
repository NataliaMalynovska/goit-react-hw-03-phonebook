import { Component } from "react";
import { Label, Input, ButtonSubmit} from './ContactForm.styled';
import { Formik, Form } from "formik";

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

handleChange = e => {
  const {name, value} = e.currentTarget;
    this.setState({ [name]: value});
   };

handleSubmit= e => {
    e.preventDefault();
    console.log(this.state)
    this.props.onSubmit(this.state);
    this.reset();
  }

reset = () => {
    this.setState({name: '', number: ''})
  }

render() {
return (
  <Formik>
    <Form onSubmit={this.handleSubmit}>
  <Label>
  Name
  <Input    
  type="text"
  name="name"
  value={this.state.name}
  onChange={this.handleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  placeholder='John Smith'
  />  
  </Label>
  <Label>
  Number
  <Input
  type="tel"
  name="number"
  value={this.state.number}
  onChange={this.handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  placeholder='+123 45 67'
  />  
  </Label>
      <ButtonSubmit type="submit" >
          Add contact
      </ButtonSubmit>
      </Form>
  </Formik>
  
  );
  };
  }

export default ContactForm;