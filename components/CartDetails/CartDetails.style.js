import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  iconCartDetails: {
    img: {
      width: 64,
      height: 64,
    },
  },
  cartDetails: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black', // Note: React Native uses numbers for border width
  },
  cartDetailsText: {
    margin: 16, // You can adjust the margin as needed for your design
  },
});

export default styles;
