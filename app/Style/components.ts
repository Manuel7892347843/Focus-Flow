import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// ============================================
// 🧩 COMPONENTI UI - Bottoni, input, elementi riutilizzabili
// ============================================

export const componentStyles = StyleSheet.create({
    // Bottoni azione principali
    start_button: {
        backgroundColor: COLORS.primary,
        padding: 12,
        borderRadius: 12,
        marginTop: 30,
        width: 150,
    },
    start_button_text: {
        color: COLORS.backgroundMain,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    restart_button: {
        backgroundColor: COLORS.primary,
        padding: 12,
        borderRadius: 12,
        marginTop: 30,
        width: 150,
    },
    
    // Input text
    input: {
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        color: COLORS.textPrimary,
        fontSize: 16,
        borderWidth: 1,
        borderColor: COLORS.primary,
        width: 80,
        textAlign: 'center',
        backgroundColor: COLORS.backgroundInput,
    },
    inputLabel: {
        color: COLORS.textPrimary,
        fontSize: 16,
        marginRight: 10,
    },
    
    // Indicatori dot (per modalità)
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },
});

export default componentStyles;