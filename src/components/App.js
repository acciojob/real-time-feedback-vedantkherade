
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  function validate(field, value){
    let error = "";

    if(field == "name"){
      if(!value.trim()) error = "Name is required";
    }

    if(field == "email"){
       if(!value.includes('@gmail.com')) error='Invalid email format';
    }

    if(field == "password"){
      if(value.length < 6) error = "Password must be at least 6 characters";
    }

    setErrors((prev) => ({...prev, [field]: error}));
  }

  const handleChange = (e) => {
    const {id, value} = e.target;

    setForm((prev) => ({ ...prev, [id]: value }));
     validate(id, value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <div className="container">
      {/* Do not remove the main div */}
      <form onSubmit={handleSubmit} className="form-box">
        <label>Name:</label>
        <input id="name" value={form.name} onChange={handleChange} />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label>Email:</label>
        <input id="email" value={form.email} onChange={handleChange} />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label>Password:</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App
