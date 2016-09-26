##React Native 学习之ListView（二）：九宫格

####Demo展示

![](../RNStudyEight/1.gif)


今天学习的是用ListView来实现九宫格这样的一个效果。你可能会说，直接用一个View组件包裹着Image和Text也可以做出来。确实是的，不过之前我们在学习Image组件时，仿美团首页顶部效果时，有那么多item需要加载，若是有更多的item项，我们还是全部把它写好，全部一次性渲染？很显然这没有达到复用和提高性能的期望。

昨天初步学习了ListView的使用，RN中对于ListView的渲染是进行过的渲染优化的，不过ListView的列表数据一般是垂直方向，那怎么实现横向的列表了？在学习View组件时，它有一个属性：flexDirection，用来设置一个组件在View中排列的方向，并且当一行摆放不下的时候，我们需要其它组件摆放到第二行，此时我们可以用到View的另外一个属性：flexWrap。但是，对于ListView来说，我们不能直接通过Style来使用他们，而须通过它的一个属性：contentContainerStyle。

####Demo实现

这里只贴一下重点代码，上篇文章有说明使用ListView的一些步骤

	constructor(props) {
        super(props);
        var data = this.props.data;
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data)
        };
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
    
    ----------------------------
    listViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    
 好了，今天的ListView的学习就学完了。下篇文章我们将继续学习ListView，通过一个固定ListView头部的Demo来研究一下ListView的高级用法，敬请期待。

[代码下载]()
    
    