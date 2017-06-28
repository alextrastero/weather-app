import { h, Component } from 'preact'

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="city" />
    </form>
  );
}

export default Form;
