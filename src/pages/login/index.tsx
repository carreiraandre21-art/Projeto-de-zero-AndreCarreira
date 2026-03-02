import React from "react";

import {
    Text,
    View
} from 'react-native'; 


import { style } from "./style";

export default function login () {
    return  (
       
        <View style={style.container}>
            <View style={style.boxTop}>
                <text> top </text>
            </View>
            <View style={style.boxMid}>
                 <text> mid </text>
            </View>
            <View style={style.botton}>
                 <text> botton </text>
            </View>

        </View>

    )
}