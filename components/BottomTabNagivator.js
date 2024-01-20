import React, {Component} from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-nagivation/bottom-tabs"
import Transaction from "../screens/Transaction"
import Search from"../screens/Search"

const Tab = createBottomTabNavigator()
export default class BottomTabNagivator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name = "Transaction" component = {Transaction}/>
                    <Tab.Screen name = "Search" component = {Search}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}