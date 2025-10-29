import { useState } from "react";
import GeneratePDFButton from "./GeneratePDFButton";

function FormInput() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <GeneratePDFButton
        firstName={formData.firstName.charAt(0).toUpperCase() + formData.firstName.slice(1)}
        lastName={formData.lastName.charAt(0).toUpperCase() + formData.lastName.slice(1)}
      />
    </form>
  );
}

export default FormInput;
