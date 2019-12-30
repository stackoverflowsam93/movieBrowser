import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height: '100%'
    },
    font:{
        fontSize: 20
    }
})

/**
 * The Screen displayed when there is an error
 */
class ErrorScreen extends React.Component {
    render(){
        const { navigation } = this.props;
        const error = navigation.getParam('errorMessage')
        return(
            <View style={styles.container}>
                <Text style={styles.font}>{error}</Text>
            </View>
        )
    }
}

export default ErrorScreen