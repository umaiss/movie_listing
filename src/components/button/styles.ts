import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/dimensions';
import Theme from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: width(100),
    justifyContent: 'center',
    paddingVertical: height(1.7),
    width: '100%'
  },
  disableContainer: {
    backgroundColor: Theme.color.COLOR_LIGHT_TEXT,
  },
  primaryContainer: {
    backgroundColor: Theme.color.COLOR_BLUE,
  },
  secondaryContainer: {
    borderColor: Theme.color.COLOR_WHITE,
    borderRadius: width(100),
    borderWidth: width(0.2)
  },
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,

    shadowRadius: 3.84,
  },
});

export default styles;