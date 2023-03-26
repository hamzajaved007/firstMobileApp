import { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native'

const GoalInput = (props) => {
    const [enteredGoaltext, setEnteredGoaltext] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoaltext(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoaltext)
        setEnteredGoaltext('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your Course Goal!' onChangeText={goalInputHandler} value={enteredGoaltext}/>
            <Button title='Add Goal!' onPress={addGoalHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginBottom: 16,
    },
    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        width: '75%',
        marginRight: 5,
        padding: 5,
    },
})

export default GoalInput