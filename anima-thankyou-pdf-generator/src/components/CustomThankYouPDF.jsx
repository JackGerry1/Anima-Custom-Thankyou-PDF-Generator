import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
import thankYouImage from '../assets/thankYouImage.png'; 

const styles = StyleSheet.create({
  page: { padding: 30, textAlign: 'center' },
  image: { width: 300, margin: '0 auto' },
  text: { fontSize: 16, marginTop: 20 },
});

function MyDocument({ firstName, lastName }) {
  return (
    <Document>
      <Page style={styles.page}>
        <Image style={styles.image} src={thankYouImage} />
        <Text style={styles.text}>
          Thank you for supporting us, {firstName} {lastName}!
        </Text>
      </Page>
    </Document>
  );
}

export default MyDocument;
