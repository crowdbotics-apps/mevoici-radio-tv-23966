import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList194993Navigator from '../features/ArticleList194993/navigator';
import ArticleList194976Navigator from '../features/ArticleList194976/navigator';
import ArticleList194975Navigator from '../features/ArticleList194975/navigator';
import ArticleList194974Navigator from '../features/ArticleList194974/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList194993: { screen: ArticleList194993Navigator },
ArticleList194976: { screen: ArticleList194976Navigator },
ArticleList194975: { screen: ArticleList194975Navigator },
ArticleList194974: { screen: ArticleList194974Navigator },

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
