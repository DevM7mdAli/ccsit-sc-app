import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, Alert } from 'react-native';
import { appConf } from './firebaseConfigue';
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';


export default function AuthScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  const handleAuth = async () => {
    console.log("work")
    const auth = getAuth(appConf)
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error: any) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-700 justify-center p-4 gap-5">
      <View>
        <View>
          <TextInput
            className="border p-2 my-2"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            className="border p-2 my-2"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View className='flex-row justify-around w-full p-4'>
          <Button title={isSignUp ? "Sign Up" : "Sign In"} onPress={() => {}} />
          <Button title={`Switch to ${isSignUp ? "Sign In" : "Sign Up"}`} onPress={() => setIsSignUp(!isSignUp)} />
        </View>
        <View className='items-center'>
        <Link replace href={"/services"} className='text-center bg-red-400 p-5'>Gust mode</Link>
        </View>
        </View>
    </SafeAreaView>
  );
};

