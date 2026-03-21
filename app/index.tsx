import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { style } from './Style/style'

export default function Index() {
    return (
        <View style={style.background}>
            <Text style={style.title}>FocusFlow</Text>
            <Text style={style.sub_title}>Scopri il tuo ritmo naturale</Text>

            {/*Pannello delle modalita'*/}
            <View style={style.mode_pane}>
                <TouchableOpacity key={1} style={[style.mode_button, style.mode_button_active]}>
                    <View style={[style.dot, { backgroundColor: '#1ECAD3' }]} />
                    <Text style={[style.mode_text, style.mode_text_active]}>
                        Focus
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity key={2} style={style.mode_button}>
                    <View style={[style.dot, { backgroundColor: '#2ECC71' }]} />
                    <Text style={style.mode_text}>
                        Short Break
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity key={3} style={style.mode_button}>
                    <View style={[style.dot, { backgroundColor: '#9B59B6' }]} />
                    <Text style={style.mode_text}>
                        Long Break
                    </Text>
                </TouchableOpacity>
            </View>

            {/*Timer*/}
            <View>
                <Text style={style.clock_text}>25:00</Text>
            </View>

            <View className="flex-row justify-center gap-4">
                <TouchableOpacity style={style.start_button}>
                    <Text style={style.start_button_text}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.start_button}>
                    <Text style={style.start_button_text}>Stop</Text>
                </TouchableOpacity>
            </View>
            {/* belli puzzi */}
        </View>
    );
}