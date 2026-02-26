import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    feedback: ""
  }); 

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData ((prevFormData) => ({
      ...prevFormData,
      [name]: value, 
    }));
  };

  const isFormValid =
    formData.name !== "" &&
    formData.email !== "" &&
    formData.feedback !== "";

  return (
    <div className="container">
      <h1>User Feedback Form</h1>

      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="feedback"
          placeholder="Enter your feedback"
          value={formData.feedback}
          onChange={handleChange}
          maxLength="200"
        />

        <button disabled={!isFormValid}>
          Submit
        </button>
      </form>

      <div>
        <h2>Live Preview</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Feedback: {formData.feedback}</p>
      </div>
    </div>
  );
}

 
export default App;
