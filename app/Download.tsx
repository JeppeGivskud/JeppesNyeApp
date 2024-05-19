import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Download() {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.download}
                onPress={() => alert('VIRUS JUBIII')}
            >
                <Text>!!DOWNLOAD!!</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    download: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'rgb(0, 255, 0)',
        borderRadius: 10,
        borderColor: 'rgb(0, 200, 0)',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
