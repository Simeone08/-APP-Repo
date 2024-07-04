import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from "./DrawerNav.routes";

export function Routes(){
    return(
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )
}