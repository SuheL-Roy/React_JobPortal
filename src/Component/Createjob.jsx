import React, { useState } from "react";

export default function Createjob({submit}) {
  const [form, setform] = useState({
    title: "",
    company: "",
    city: "",
    discription: "",
  });
  const handleinput = (event) => {
    //console.log(event);
    setform({ ...form, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
      event.preventDefault();
      submit({...form, id:new Date().getTime().toString()});
      //console.log('submeting');
  } 
  return (
    <div className="box">
      <h1 className="title is-5">Create a Vacancy</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Job title"
          value={form.title}
          name="title"
          onChange={handleinput}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="company name"
          value={form.company}
          name="company"
          onChange={handleinput}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="city name"
          value={form.city}
          name="city"
          onChange={handleinput}
          required
        />
        <textarea
          className="input"
          type="text"
          placeholder="Description"
          value={form.discription}
          name="discription"
          onChange={handleinput}
        ></textarea>
        <button type='submit' className="button is-primary">Create</button>
      </form>
    </div>
  );
}
