import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppContainer from './src/components/app-container'
import Main from './src/components/screens/main'

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        <Main />
      </View>
    </AppContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
