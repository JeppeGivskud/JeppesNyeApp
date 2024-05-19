import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Download from './Download';
import BiografBillet from './BiografBillet';
var oneLinerJoke = require('one-liner-joke');
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
//Served with https://github.com/gitname/react-gh-pages
export default function App() {
    const { width, height } = useWindowSize();

    const [cpr, setCpr] = useState(''); // Add this line
    const [joke, setJoke] = useState(oneLinerJoke.getRandomJoke().body); // Add this line
    const [placeholder, setPlaceholder] = useState('_ _ _ _ _ _ - _ _ _ _'); // Add this line
    const [sent, setSent] = useState(false); // Add this line
    const [countdown, setCountdown] = useState(25); // Add this line

    useEffect(() => {
        if (sent && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [sent, countdown]);
    console.log(countdown);
    return (
        <View style={styles.container}>
            {countdown > 0 && (
                <>
                    <Text style={styles.tillykke}>
                        Tillykke du har vundet!!!{' '}
                    </Text>
                    <Download></Download>
                    <Text style={styles.joke}>
                        !Joke of the day! {'\n '}
                        {joke}
                    </Text>
                    <Text>Indtast CPR-NR for at modtage din gave </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderColor: 'rgb(60,60,60)',
                            borderWidth: 2,
                            borderRadius: 30,
                            padding: 5,
                            width: 260,
                        }}
                    >
                        <Text style={{ width: 80 }}>CPR-NR:</Text>
                        <TextInput
                            style={{
                                width: 125,

                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 5,
                            }}
                            onFocus={() => {
                                setCpr(''), setPlaceholder('');
                            }}
                            onSubmitEditing={() => {
                                if (cpr.length === 10 || cpr.length === 11) {
                                    setSent(true);
                                    alert(
                                        'Tak for dit CPR-NR, vi sender din gave snart!',
                                    );
                                } else {
                                    alert('Ugyldigt CPR-NR - kom nu mand');
                                }
                            }}
                            onBlur={() =>
                                setPlaceholder('_ _ _ _ _ _ - _ _ _ _')
                            } // Add this line
                            placeholder={placeholder}
                            placeholderTextColor={'rgb(100,100,100)'}
                            textAlign="center"
                            autoComplete="cc-number"
                            value={cpr} // Add this line
                            onChangeText={setCpr} // Add this line
                        ></TextInput>
                        <Pressable
                            style={styles.sendCPR}
                            onPress={() => {
                                if (cpr.length === 10 || cpr.length === 11) {
                                    setSent(true);
                                    alert(
                                        'Tak for dit CPR-NR, vi sender din gave snart!',
                                    );
                                } else {
                                    alert('Ugyldigt CPR-NR - kom nu mand');
                                }
                            }}
                        >
                            <Text
                                style={{ color: '#fff', textAlign: 'center' }}
                            >
                                Send til "Dark Net"
                            </Text>
                        </Pressable>
                    </View>
                    <Text>{cpr}</Text>
                    {(cpr === '0605730000' || cpr === '060573-0000') &&
                        sent && (
                            <Text>
                                Goddag hr "Rene Firring Givskud" {'\n'}Født 1973
                                med 2 skønne børn på "Bøggildsvej 26 8530
                                Hjortshøj", {'\n'}Du elsker [Sejlesport, {'\n'}
                                Motorcykler,{'\n'}Lave håndværk, {'\n'}din kone,{' '}
                                {'\n'}dine børn (mest jeppe ifølge vores
                                registre), {'\n'}dine hunde, {'\n'}Jagt (selvom
                                du syntes 800kr for 20 skud er vildt)] ] {'\n'}
                                Din super seje gave sendes til
                                "rfgivskud@gmail.com" {'->'} når jeppe lige har
                                tid.
                                {'\n'}
                            </Text>
                        )}
                    {sent && countdown < 10 && countdown > 0 && (
                        <Text style={{ color: 'red' }}>
                            !Denne besked vil selvdestruere om {countdown}{' '}
                            sekunder!
                        </Text>
                    )}
                    <Download></Download>
                </>
            )}
            {countdown <= 0 && (
                <>
                    <Confetti width={width} height={height} />{' '}
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <BiografBillet></BiografBillet>
                        <Text>BIOGRAFBILLET! Brug den når du vil!</Text>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    tillykke: {
        width: '100%',
        borderRadius: 5,
        backgroundColor: 'rgb(0, 150, 150)',
        padding: 10,
        margin: 10,
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
    },
    joke: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 14,
        backgroundColor: 'yellow',
    },
    sendCPR: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 85,

        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: 'rgb(50,50,50)',
        borderRadius: 20,
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 2,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
    },
});
