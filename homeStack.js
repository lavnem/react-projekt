import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Turnaje from '../screens/turnaje';
import Profil from '../screens/profil';
import Zebricek from '../screens/zebricek';
import Sazky from '../screens/sazky';

const screens = {
    Turnaje: {
        screen: Turnaje
    },
    Profil:{
        screen: Profil
    },
    Zebricek:{
        screen: Zebricek
    },
    Sazky:{
        screen: Sazky
    },
    
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);