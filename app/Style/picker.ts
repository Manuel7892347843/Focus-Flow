import { Dimensions, StyleSheet } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// ============================================
// 🎛️ PICKER - Selezione minuti e secondi
// ============================================

export const pickerStyles = StyleSheet.create({
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        marginTop: -10,
    },
    
    pickerBox: {
        backgroundColor: 'rgba(30, 202, 211, 0.15)',
        borderRadius: 16,
        padding: 5,
        alignItems: 'center',
        minWidth: 90,
    },
    
    picker: {
        height: 80,
        width: 120,
        color: '#ffffff',
    },
    
    pickerItem: {
        color: '#ffffff',
        fontSize: 18,
    },
    
    dots: {
        color: '#1ECAD3',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default pickerStyles;