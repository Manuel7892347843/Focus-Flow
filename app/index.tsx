import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { style } from './Style/style';

export default function Index() {
    const [secondi, setSecondi] = useState(0);
    const [minuti, setMinuti] = useState(25);
    const [attivo, setAttivo] = useState(false);
    const [testo, setTesto] = useState("Start Focus");
    const TOTALE = secondi + (minuti * 60);
    const C = 2 * Math.PI * 100;
    const riempimento = (secondi / TOTALE) * C;
    const vuoto = C - riempimento;

    {/*const minuti = Math.floor(secondi / TOTALE);*/}

    const secs = secondi % TOTALE;
    const minuti_timer = secondi % TOTALE;
    const rimanente = TOTALE - secondi;
    const tempoFormattato = `${minuti}:${secs.toString().padStart(2, '0')}`;

    useEffect(() => {
        if (attivo && secondi < TOTALE) {
        var  interval = setInterval(() => setSecondi(s => s - 1), 1000);
        var min_interval = setInterval(() => setMinuti(m => m - 1), 60000);
        }
        return () => {clearInterval(interval); clearInterval(min_interval)}
    }, [attivo, secondi, minuti]);

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

            <View style={style.clock_position}>
                <Svg width="240" height="240" >
                    {/* 1) CERCHIO DIETRO - sfondo grigio fisso */}
                    <Circle 
                        cx="110" 
                        cy="110" 
                        r="100" 
                        stroke="#9c9c9c"      
                        strokeWidth="20" 
                        fill="none"
                    />
                    
                    {/* 2) CERCHIO DAVANTI - colore che cresce */}
                    <Circle 
                        cx="110" 
                        cy="110" 
                        r="100" 
                        stroke="#1ECAD3"      
                        strokeWidth="20" 
                        fill="none"
                        strokeDasharray={`${riempimento} ${C}`}  
                        strokeLinecap="round"  
                        transform="rotate(-90 110 110)"
                    />
                </Svg>

                {/* TEMPO AL CENTRO */}
                <Text style={style.clock_text}>{tempoFormattato}</Text>

                <View>
                    {/* MINUTI */}
                    <Picker
                        selectedValue={minuti}
                        style={{ height: 150, width: 100 }}
                        onValueChange={(itemValue) => setMinuti(itemValue)}
                    >
                        {[...Array(60).keys()].map(i => (
                        <Picker.Item key={i} label={`${i} min`} value={i} />
                        ))}
                    </Picker>
                </View>
                
                
                {/* BOTTONI */}
                <View className="flex-row justify-center gap-10">
                    <TouchableOpacity onPress={() => {setAttivo(!attivo)}} style={style.start_button}>
                        <Text style={style.start_button_text}>{attivo ? "Stop Focus" : "Start Focus"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setAttivo(false); setSecondi(0);}} style={style.stop_button}>
                        <Text style={style.start_button_text}>Restart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}