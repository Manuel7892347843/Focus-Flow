import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// ============================================
// 🎛️ PICKER - Selezione minuti e secondi
// ============================================

export const pickerStyles = StyleSheet.create({
    // Container picker
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: -40,
    },
    
    // Stile picker
    picker: {
        height: 150,
        width: 100,
    },
    
    // Stile item picker
    pickerItem: {
        color: COLORS.textPrimary,
        fontSize: 17,
    },
});

export default pickerStyles;