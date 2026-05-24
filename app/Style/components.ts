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
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        color: COLORS.textPrimary,
        fontSize: 18,
        borderWidth: 2,
        borderColor: COLORS.primary,
        width: 100,
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
