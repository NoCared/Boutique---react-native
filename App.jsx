import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';
import { Header } from './components/Header/Header';



function App() {

    return (
        <SafeAreaView>
            <ScrollView>
                <Header></Header>
                <Text style = {styles.exempleText}>
                    Hello World !
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    exempleText: {
        fontWeight: '900',
        fontSize: 48,
        padding: 8,
        color: '#000000',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
