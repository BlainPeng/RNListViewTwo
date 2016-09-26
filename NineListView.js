

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
var columns = 3;
var itemWidth = 100;
var itemHeight = 120;
var wMargins = (screenWidth - itemWidth * columns) / (columns + 1);
var hMargins = 20;

class NineListView extends Component {


    constructor(props) {
        super(props);
        //获取数据源
        var data = this.props.data;
        //创建ListView对象
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data)
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                contentContainerStyle={styles.listViewContent}
            />
        );
    }

    renderRow(rowData) {

        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>this.showDialog(rowData.title)}
                style={styles.itemContainer}
            >
                <View >
                    <Image
                        source={{uri: rowData.icon}}
                        style={{width: 80, height: 80}}
                    />
                    <Text style={styles.textStyle}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );

    }

    showDialog(text) {

        Alert.alert('分享', text, [{
            text: '暂时放弃'
        }, {
            text: '马上分享'
        }]);


    }

}

const styles = StyleSheet.create({

    listViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap'


    },
    itemContainer: {
        width: itemWidth,
        height: itemHeight,
        marginLeft: wMargins,
        marginTop: hMargins,
        alignItems: 'center'
    },
    textStyle: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 15,
        fontFamily:'bold'
    }
});


module.exports = NineListView;
