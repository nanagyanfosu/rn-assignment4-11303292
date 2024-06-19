import React from 'react';
import { View, Button, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function LoginPage({ navigation }) {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* header */}
            <Text style={{
                marginTop: 200, fontSize: 30, fontWeight: 'bold', color: "#356899", marginBottom: 15
            }}>Jobizz</Text>
            <Text style={{ fontSize: 28, fontWeight: '500', marginBottom: 10 }}>Welcome Back</Text>
            <Text style={{ marginBottom: 20 }}>Let's log in. Apply to jobs!</Text>

            {/* input */}
            <View>
                <TextInput placeholder="Name" style={{ borderWidth: 0.5, borderColor: '#AFB0B6', padding: 10, marginTop: 20, borderRadius: 10 }} />

                <TextInput placeholder="Email" style={{ borderWidth: 0.5, borderColor: '#AFB0B6', padding: 10, marginTop: 20, marginBottom: 20, borderRadius: 10 }} />

                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{
                        backgroundColor: '#356899',
                        height: 45,
                        padding: 10,
                        marginTop: 5,
                        borderRadius: 5,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: '#FFFFFF' }}>Log in</Text>
                </TouchableOpacity>
            </View>

            {/* footer */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5, marginTop: 30 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#AFB0B6' }} />
                <Text style={{ paddingHorizontal: 10, textAlign: "center" }}>Or continue with</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: '#AFB0B6' }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 50, }}>

                <Icon name="apple" size={28} color="black" backgroundColor="white" padding={10} />

                <Icon name="google" size={28} color="default" backgroundColor="white" padding={10} />

                <Icon name="facebook" size={28} color="white" backgroundColor="blue" padding={10} />

            </View>

            <Text style={{ justifyContent: "center", textAlign: "center" }}>Haven't an account? Sign up now!</Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
});

export default LoginPage;



