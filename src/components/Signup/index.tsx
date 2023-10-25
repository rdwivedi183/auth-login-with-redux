import React, { ChangeEvent, useState } from 'react';
import Button from '../common/Button';
import Input from './SignupStyle';
import Card from '../common/Card';

interface FormState {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Signup: React.FC = () => {
  const [formValue, setFormValue] = useState<FormState>({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValue)
  }

  return (
    <Card>
      <h2>Signup Forms</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-fields'>
          <Input
            name="name"
            type="text"
            placeholder='Name'
            value={formValue.name}
            onChange={handleChange}
          />
          <Input
            name="lastName"
            type="text"
            placeholder='lastName'
            value={formValue.lastName}
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder='Email'
            value={formValue.email}
            onChange={handleChange}

          />
          <Input
            name="password"
            type="password"
            placeholder='password'
            value={formValue.password}
            onChange={handleChange}
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder='Confirm password'
            value={formValue.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <Button name="signup" type="submit" />
        <div>
          Already have an account? Login
        </div>
        <div>or</div>
        <Button name="Login with Facebook" type="button" />
        <Button name="Login with Google" type="button" />
      </form>
    </Card>
  );
};

export default Signup;