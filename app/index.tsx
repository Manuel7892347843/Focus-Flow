import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { style } from './Style/style';

export default function Index() {
    const DEFAULT = 10
    const [tempoRimanente, setTempoRimanente] = useState(DEFAULT * 60);
    const [tempoTotale, setTempoTotale] = useState(DEFAULT * 60);
    const [attivo, setAttivo] = useState(false);

    const C = 2 * Math.PI * 100;
    const riempimento = (tempoRimanente / tempoTotale) * C;

    const minuti = Math.floor(tempoRimanente / 60);
    const secondi = tempoRimanente % 60;
    const tempoFormattato = `${minuti}:${secondi.toString().padStart(2, '0')}`;

    useEffect(() => {
        let interval = 0;
        if (attivo && tempoRimanente > 0) {
            interval = setInterval(() => {
                setTempoRimanente(prev => Math.max(prev - 1, 0));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [attivo, tempoRimanente]);

    const aggiornaTempo = (min = 0, sec = 0) => {
        const tot = min * 60 + sec;
        setTempoRimanente(tot);
        setTempoTotale(tot);
    };

    return (
        <View style={style.background}>
            <Text style={style.title}>FocusFlow</Text>
            <Text style={style.sub_title}>Scopri il tuo ritmo naturale</Text>

            <View style={style.mode_pane}>
                <TouchableOpacity key={1} style={[style.mode_button, style.mode_button_active]}>
                    <View style={[style.dot, { backgroundColor: '#1ECAD3' }]} />
                    <Text style={[style.mode_text, style.mode_text_active]}>Focus</Text>
                </TouchableOpacity>
                <TouchableOpacity key={2} style={style.mode_button}>
                    <View style={[style.dot, { backgroundColor: '#2ECC71' }]} />
                    <Text style={style.mode_text}>Short Break</Text>
                </TouchableOpacity>
                <TouchableOpacity key={3} style={style.mode_button}>
                    <View style={[style.dot, { backgroundColor: '#9B59B6' }]} />
                    <Text style={style.mode_text}>Long Break</Text>
                </TouchableOpacity>
            </View>

            <View style={style.clock_position}>
                <Svg width="240" height="240">
                    {/* Cerchio sfondo */}
                    <Circle 
                        cx="110" 
                        cy="110" 
                        r="100" 
                        stroke="#9c9c9c"      
                        strokeWidth="20" 
                        fill="none"
                    />
                    {/* Cerchio dinamico */}
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

                <Text style={style.clock_text}>{tempoFormattato}</Text>

                {/* PICKER MINUTI E SECONDI */}
                {!attivo && (
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                        <Picker
                            selectedValue={minuti}
                            style={{ height: 150, width: 150}}
                            itemStyle={{ color: '#EAF2F8', fontSize: 17 }}
                            mode="dropdown"
                            onValueChange={(itemValue) => aggiornaTempo(itemValue, secondi)}
                        >
                            {[...Array(60).keys()].map(i => (
                                <Picker.Item key={i} label={`${i} min`} value={i} />
                            ))}
                        </Picker>

                        <Picker
                            selectedValue={secondi}
                            style={{ height: 150, width: 150}}
                            itemStyle={{ color: '#EAF2F8', fontSize: 17 }}
                            mode="dropdown"
                            onValueChange={(itemValue) => aggiornaTempo(minuti, itemValue)}
                        >
                            {[...Array(60).keys()].map(i => (
                                <Picker.Item key={i} label={`${i} sec`} value={i} />
                            ))}
                        </Picker>
                    </View>
                )}

                <View style={style.buttons_continer}>
                    <TouchableOpacity onPress={() => setAttivo(!attivo)} style={style.start_button}>
                        <Text style={style.start_button_text}>{attivo ? "Stop Focus" : "Start Focus"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setTempoRimanente(DEFAULT*60);
                        setTempoTotale(DEFAULT*60);
                        setAttivo(false);
                    }} style={style.restart_button}>
                        <Text style={style.start_button_text}>Restart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}