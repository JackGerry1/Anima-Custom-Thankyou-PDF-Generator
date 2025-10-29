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
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Download Custom PDF
    </button>
  );
}

export default GeneratePDFButton;
