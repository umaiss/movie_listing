
import { Provider } from 'react-redux';
import StackNavigator from './src/navigation/StackNavigator';
import { store } from './src/redux/store';

function App() {

  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}



export default App;
