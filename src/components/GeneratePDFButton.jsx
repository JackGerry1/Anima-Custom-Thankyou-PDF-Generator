import { generatePDF } from "../services/pdfService";
import "../styles/GeneratePDFButton.css";

function GeneratePDFButton({ firstName, lastName }) {
  const handleClick = () => {
    if (firstName !== "" && lastName !== "") {
      generatePDF(firstName, lastName);
    }
  };

  return (
    <button disabled={!firstName || !lastName} onClick={handleClick}>
      Download Custom PDF
    </button>
  );
}

export default GeneratePDFButton;
