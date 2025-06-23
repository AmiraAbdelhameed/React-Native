import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Router from './src/Routes/Router';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';

export default function App() {
  return (
    <Provider store={store}>
   <Router />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
