import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// ============================================
// 🎯 MODALITÀ - Focus, Short Break, Long Break
// ============================================

export const modeStyles = StyleSheet.create({
    // Container principale modalità
    mode_pane: {
        flexDirection: 'row',
        backgroundColor: COLORS.backgroundCard,
        borderRadius: 12,
        marginTop: 20,
        alignSelf: 'center',
        padding: 6,
        gap: 4,
    },
    
    // Singolo bottone modalità
    mode_button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        gap: 8,
    },
    mode_button_active: {
        backgroundColor: COLORS.backgroundMain,
    },
    
    // Testi modalità
    mode_text: {
        color: COLORS.textSecondary,
        fontSize: 13,
        fontWeight: '500',
    },
    mode_text_active: {
        color: COLORS.textPrimary,
    },
});

export default modeStyles;