import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    isLoading: {
        flex: 1,
        padding: 20
    },
    //box0
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    //box1
    msg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'black',
        borderBottomWidth: 1
    },
    //box1-1
    subtitle: {
        color: 'green',
    },
    //box2
    content: {
        flex: 9,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'black',
        borderBottomWidth: 1,
    },
    //box2-row
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderStyle: 'solid',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderBottomLeftRadius: 20
    },
    //box2-row-columnA
    columnA: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    //box2-row-columnB
    columnB: {
        flex: 9,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    //box2-row-columnC
    columnC: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    //box2-row-columnA-1
    projectIcon: {
        flex: 1
    },
    //box2-row-columnB-1
    projectName: {
        flex: 1
    },
    //box2-row-columnB-2
    opLog: {
        flex: 1,
        paddingTop: 10
    },
    //box2-row-columnC-1
    projectStatus: {
        flex: 1
    },
    //box2-row-columnC-2
    projectFlag: {
        flex: 1,
        paddingTop: 10
    },
})
