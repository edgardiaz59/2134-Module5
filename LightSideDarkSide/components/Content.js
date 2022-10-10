import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const Content = () => {

    const th = useTheme();

    return (
        <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: th.theme.background, paddingLeft: 75, paddingRight: 75} }>
            <Text style={{ color: th.theme.body, fontSize: 25, paddingBottom: 20}}>Tap the Bear button to switch between Day and Night!  </Text>
            <Button onPress={ () => th.toggleTheme(th.theme)}title={th.theme.toggleText} color={th.theme.primary} />
            <StatusBar style="auto" />
        </View>
    )
}

export default Content;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });