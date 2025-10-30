import { useState } from "react";
import GeneratePDFButton from "./GeneratePDFButton";
import "../styles/FormInput.css";

function FormInput() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const firstName =
    formData.firstName.charAt(0).toUpperCase() + formData.firstName.slice(1);
  const lastName =
    formData.lastName.charAt(0).toUpperCase() + formData.lastName.slice(1);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName" 
        name="firstName"
        placeholder="Enter your first name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Enter your last name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <GeneratePDFButton firstName={firstName} lastName={lastName} />
    </form>
  );
}

export default FormInput;
