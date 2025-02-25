import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import RootNavigator from '../src/navigation/RootNavigator';
import {Provider} from 'react-redux';
import store from '../src/store/store';
import {getOnboardingItem} from '../src/utils/storage';

// Mock axios
import axios from 'axios';
jest.mock('axios');

// Mock Navigation
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({children}) => <>{children}</>,
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({children}) => <>{children}</>,
    Screen: ({name, component: Component}) => <Component />,
  }),
}));

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: () => ({
    Navigator: ({children}) => <>{children}</>,
    Screen: ({name, component: Component}) => <Component />,
  }),
}));

// Mock storage
// jest.mock('./src/utils/storage', () => ({
//   getOnboardingItem: jest.fn(),
// }));

describe('RootNavigator Component', () => {
  beforeEach(() => {
    getOnboardingItem.mockResolvedValue(true); // veya false, test senaryonuza göre
  });

  it('renders correctly and navigates to Home', async () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <RootNavigator />
      </Provider>,
    );

    // Ekranın yüklenmesini bekle
    await waitFor(() => {
      const navigator = getByTestId('root-navigator');
      console.log(navigator); // Bileşenin render edilip edilmediğini görmek için
      expect(navigator).toBeTruthy();
    });
  });

  it('calls checkOnboardingStatus', async () => {
    await render(
      <Provider store={store}>
        <RootNavigator />
      </Provider>,
    );

    // getOnboardingItem fonksiyonunun çağrıldığını doğrula
    await waitFor(() => {
      expect(getOnboardingItem).toHaveBeenCalledWith('onBoarding');
    });
  });
});
