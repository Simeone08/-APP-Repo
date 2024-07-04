import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainScreen } from '../screens/MainScreen';
import { SkillScreen } from '../screens/SkillScreen';
import { AboutScreen } from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
        screenOptions={{headerShown: false}}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="Skills" component={SkillScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}