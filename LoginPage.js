import React, { useState } from 'react';
import {View,StyleSheet,Text,TextInput,TouchableOpacity,} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
const UserIcon = <FontAwesome5Icons name={'user-circle'} size={20} style={{ padding: 10, color: "#f9c700", }} />;
const PasswordIcon = <FontAwesome5Icons name={'key'} size={20} style={{ padding: 10, color: "#f9c700", }} />;

const Login = () => {
    const [formVal, setFormVal] = useState({ username: "", password: "" });
    const [error,setError]=useState(false);
    const onLoginClick = () => { alert(`Username : ${formVal.mail} \nPassword : ${formVal.password}`) }
    const onValueChanged = (name, value) => {setFormVal((prevState) => ({ ...prevState, [name]: value, }));}
    
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>TAXI</Text>
            <View style={styles.inputView}>
                {UserIcon}
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="#f9c700"
                    value={formVal.mail}
                    onChangeText={e => onValueChanged("username", e)}
                >
                </TextInput>
            </View>
            <View style={{ ...styles.inputView, marginBottom: 0 }}>
                {PasswordIcon}
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#f9c700"
                    value={formVal.password}
                    onChangeText={e => onValueChanged("password", e)}
                />
            </View>
            <View style={styles.forgotPasword}>
                <TouchableOpacity>
                    <Text style={styles.accountText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPressIn={onLoginClick}>
                <Text style={styles.loginBtnText}>LOGIN</Text>
            </TouchableOpacity>
           {error && <Text style={styles.errorText}>Invalid username or password</Text>}
            <TouchableOpacity>
                <Text style={styles.accountText}>No Account? Create One</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9c700',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#0a0400",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#0a0400",
        borderRadius: 25,
        height: 40,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        color: "white",
        flex: 1,
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#0a0400",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    loginBtnText: {
        color: "#f9c700",
        fontWeight: "bold",
        fontSize: 16,
    },
    forgotPasword: {
        width: "80%",
        marginBottom: 20
    },
    accountText: {
        color: "#0a0400",
        textDecorationLine: "underline",
        alignSelf: 'flex-end'
    },
    accountCreate: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
    },
    errorText: {
        color: "red",
        marginBottom: 20,
        fontWeight: "bold",
        fontSize: 16,
    }
});


export default Login;
