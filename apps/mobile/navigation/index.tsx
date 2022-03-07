import { AboutScreen, HomeScreen } from '@learn/screens';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'dripsy';
import * as Linking from 'expo-linking';

interface RootParmList {
  Home: undefined;
  About: undefined;
}
const prefix = Linking.createURL('/');
const linking: LinkingOptions<RootParmList> = {
  prefixes: [prefix],
  config: {
    screens: {
      Home: '/home',
      About: '/about',
    },
  },
};

const Stack = createNativeStackNavigator();
const RootNavigation: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigation;
