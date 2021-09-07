import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.icon}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.itemStatus}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: -5},
        shadowOpacity: 0.9,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText: {
        marginLeft: 15,
        maxWidth: '80%',
    },
    icon: {
        width: 24,
        height: 24,
        backgroundColor: '#CCDFFF',
        opacity: 0.8,
        borderRadius: 5,
    },
    itemStatus: {
        width: 12,
        height: 12,
        borderColor: '#80AFFF',
        borderWidth: 2,
        borderRadius: 5,
    },
})

export default Task