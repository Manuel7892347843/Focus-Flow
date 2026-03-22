import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// ============================================
// ⏱️ TIMER - Orologio, cerchio progresso, controlli
// ============================================

export const timerStyles = StyleSheet.create({
    // Container orologio
    clock_position: {
        flex: 1, 
        alignItems: 'center',
        marginTop: 10,
    },
    
    // Testo tempo (25:00)
    clock_text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        position: 'absolute',
        marginTop: 75,
        marginRight: 20,
    },
    
    // Container bottoni start/restart
    buttons_continer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        gap: 10, 
        marginTop: 20,
    },
});

export default timerStyles;