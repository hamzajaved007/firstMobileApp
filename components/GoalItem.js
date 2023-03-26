import { View, Text, StyleSheet, Pressable } from 'react-native'

const GoalItem = (props) => {
    return (
        <Pressable>
            <View style={styles.goalItem}>
            <Text style={styles.goalsText}>{props.text}</Text>
        </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        padding: 10,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'purple',
        fontSize: 16,
      },
      goalsText: {
        color: 'white'
      }
})

export default GoalItem