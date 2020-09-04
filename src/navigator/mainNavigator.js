import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings97179Navigator from '../features/Settings97179/navigator';
import Settings97164Navigator from '../features/Settings97164/navigator';
import NotificationList97163Navigator from '../features/NotificationList97163/navigator';
import Maps97162Navigator from '../features/Maps97162/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings97179: { screen: Settings97179Navigator },
Settings97164: { screen: Settings97164Navigator },
NotificationList97163: { screen: NotificationList97163Navigator },
Maps97162: { screen: Maps97162Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
