import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document file="/Gabriele-Massimiani-Portfolio/assets/CV GABRIELE MASSIMIANI.pdf">
    <Page size="A4" style={styles.page}/>
  </Document>
);

export default MyDocument;