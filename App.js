import {
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer,
} from "react-navigation";

import Home from "./src/pages/home";
import Menu from "./src/pages/menu";

const DrawerApp = createDrawerNavigator({
  InitMenu: {
    screen: Home
  },
}, {
    contentComponent: Menu,
    drawerType: 'front'
  })

const RootApp = createSwitchNavigator(
  {
    InitHome: {
      screen: DrawerApp
    }
  },
  {
    initialRouteName: "InitHome"
  }
);

const AppContainer = createAppContainer(RootApp);

export default AppContainer;