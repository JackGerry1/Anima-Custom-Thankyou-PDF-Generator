import { generatePDF } from "../services/pdfService";

function GeneratePDFButton({ firstName, lastName }) {
  const handleClick = () => {
    if (firstName !== "" && lastName !== "") {
        generatePDF(firstName, lastName);
    }
  };

  return (
    <button
      onClick={handleClick}
    >
      Download Custom PDF
    </button>
  );
}

export default GeneratePDFButton;
