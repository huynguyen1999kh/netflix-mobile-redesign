import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import BaseScreen from '../screens/BaseScreen';
import Header from '../components/Header';

const RootStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
          header: <Header/>,
        },
    },
    Movie: {
        screen: Movie,
        navigationOptions: {
          header: null
        },
    },
},
    {
        initialRouteName: 'Home',
    }
);

const MainNav = createAppContainer(RootStack)

const appContainer = () => {
    return(
        <BaseScreen>
            <MainNav />
        </BaseScreen>
    )
}

export default appContainer;