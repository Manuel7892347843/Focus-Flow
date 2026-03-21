import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { style } from './Style/style';

export default function Index() {
    const TOTALE = 60;
    const [secondi, setSecondi] = useState(0);
    const [attivo, setAttivo] = useState(false);
    const C = 2 * Math.PI * 100;
    const riempimento = (secondi / TOTALE) * C;
    const vuoto = C - riempimento;
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
            

            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                
                <Svg width="240" height="240" >
                    <Circle cx="120" cy="120" r="110" stroke="#1ECAD3" strokeWidth="20" fill="none" />
                    {/* Colore che cresce - rotato per partire dall'alto */}
                    <Circle
                        cx="110" 
                        cy="110" 
                        r="100" 
                        stroke="red" 
                        strokeWidth="10" 
                        fill="none"
                        strokeDasharray={`${riempimento} ${vuoto}`}
                        transform="rotate(-90 110 110)"
                    />
                </Svg>

                {/* TEMPO AL CENTRO */}
                <Text style={style.clock_text}>26:00</Text>
                
                {/* BOTTONI */}
                <View className="flex-row justify-center gap-10">
                <TouchableOpacity style={style.start_button}>
                    <Text style={style.start_button_text}>Start Focus</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.stop_button}>
                    <Text style={style.start_button_text}>Restart</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}