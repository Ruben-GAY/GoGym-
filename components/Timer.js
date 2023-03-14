import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [inputSeconds, setInputSeconds] = useState('');

    useEffect(() => {
        let interval = null;

        if (inputSeconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [inputSeconds]);

    const handleInputSecondsChange = (text) => {
        setInputSeconds(text);
        setSeconds(parseInt(text));
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <View>
            <TextInput
                value={inputSeconds}
                onChangeText={handleInputSecondsChange}
                keyboardType='numeric'
                placeholder='Enter number of seconds'
            />
            <Text>{formatTime(seconds)}</Text>
        </View>
    );
};

export default Timer;