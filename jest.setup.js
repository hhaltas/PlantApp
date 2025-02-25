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
