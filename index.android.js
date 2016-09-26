/**
 * React Native 学习之ListView（二）:九宫格
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var dataSource = require('./shareData.json').data;
var NineListView = require('./NineListView');

class RNStudyEight extends Component {
    render() {
        return (<NineListView data={dataSource}/>);
    }
}

AppRegistry.registerComponent('RNStudyEight', () => RNStudyEight);
