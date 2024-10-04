
import './App.css';
import { useState } from 'react';
import {TextInput,
  Button,
  Form,
  FormGroup,
  Checkbox,} from 'carbon-components-react'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log('Form Submitted', formData);
  };

  return (
    <div className="App" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Registration Form</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup legendText="">
          <TextInput
            id="firstName"
            labelText="First Name"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button>Primary</Button>
<Button kind="secondary">Secondary</Button>
<Button kind="tertiary">Tertiary</Button>
<Button kind="danger">Danger</Button>
<Button kind="danger--tertiary">Danger Tertiary</Button>
<Button kind="danger--ghost">Danger Ghost</Button>
<Button kind="ghost">Ghost</Button>
        <FormGroup legendText="">
          <TextInput
            id="lastName"
            labelText="Last Name"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup legendText="">
          <TextInput
            id="email"
            type="email"
            labelText="Email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup legendText="">
          <TextInput
            id="password"
            type="password"
            labelText="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup legendText="">
          <Checkbox
            id="terms"
            labelText="I agree to the terms and conditions"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <Button type="submit" kind="primary">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default App;
