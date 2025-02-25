import * as React from 'react';
import {screen, render, fireEvent} from '@testing-library/react-native';

import App from '../App';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('../src/utils/storage', () => ({
  getOnboardingItem: jest.fn(),
}));

jest.mock('@react-navigation/native', () => {
  return {
    NavigationContainer: ({children}) => <>{children}</>,
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: () => {
      return {
        Navigator: ({children}) => <>{children}</>,
        Screen: ({name, component}) => <component />,
      };
    },
  };
});

jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: () => {
      return {
        Navigator: ({children}) => <>{children}</>,
        Screen: ({name, component}) => <component />,
      };
    },
  };
});

// LinearGradient mock'ı yukarıda tanımlandığı için burada tekrar gerek yok
// jest.mock('react-native-linear-gradient'); // Bu satırı kaldırabilirsiniz

// AsyncStorage mock'ı yukarıda tanımlandığı için burada tekrar gerek yok
// jest.mock('@react-native-async-storage/async-storage'); // Bu satırı kaldırabilirsiniz

describe('App Component', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<App />);

    // App bileşeninin render edildiğini doğrula
    expect(toJSON()).toBeTruthy();
  });
});
