import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// ============================================
// 📝 STORICO - Sessioni passate, lista vuota
// ============================================

export const historyStyles = StyleSheet.create({
    // Container stato vuoto
    historyEmpty: {
        borderRadius: 12,
        padding: 30,
        alignItems: 'center',
        marginBottom: 30,
    },
    
    // Testo stato vuoto
    historyEmptyText: {
        color: COLORS.textMuted,
        fontSize: 14,
    },
});

export default historyStyles;