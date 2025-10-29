import { pdf } from "@react-pdf/renderer";
import CustomThankYouPDF from "../components/CustomThankYouPDF";

// Generate PDF and trigger a download
export async function generatePDF(firstName, lastName) {
  const blob = await pdf(
    <CustomThankYouPDF firstName={firstName} lastName={lastName} />
  ).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `Thank-You-${firstName}-${lastName}.pdf`;
  link.click();
  URL.revokeObjectURL(url);
}
