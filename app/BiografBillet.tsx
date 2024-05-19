import React from 'react';
import { View, Text } from 'react-native';

const BiografBillet = ({
    movieTitle = 'Du vælger selv!',
    cinemaName = 'Cinemaxx (fordi IMAX)',
    showTime = '20:00',
    seatNumber = 'A1',
}) => {
    return (
        <View style={{ width: '100%', height: 120 }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <Text style={{ fontSize: 100, color: 'grey' }}>2x</Text>
                <Text style={{ ...styles.title, fontWeight: 'bold' }}>
                    Film: {movieTitle}
                </Text>
                <Text>+</Text>
                <View
                    style={[
                        styles.cinemaTicket,
                        {
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
                        },
                    ]}
                >
                    <Text style={{ fontSize: 20 }}>Popcorn</Text>
                    <Text>+</Text>
                    <Text style={{ fontSize: 20 }}>Cola</Text>
                </View>
            </View>
        </View>
    );
};

const styles = {
    cinemaTicket: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'red',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
};

export default BiografBillet;
