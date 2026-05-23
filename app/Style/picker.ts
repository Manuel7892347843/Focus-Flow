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
        gap: 10,
        marginTop: 15,
        marginBottom: 10,
    },
    
    pickerBox: {
        backgroundColor: 'rgba(30, 202, 211, 0.08)',
        borderRadius: 12,
        padding: 2,
        alignItems: 'center',
        minWidth: 80,
        borderWidth: 1,
        borderColor: 'rgba(30, 202, 211, 0.2)',
    },
    
    picker: {
        height: 70,
        width: 100,
        color: '#1e293b',
    },
    
    pickerItem: {
        color: '#1e293b',
        fontSize: 16,
        fontWeight: '600',
    },
    
    dots: {
        color: '#1ECAD3',
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 0.6,
    },
});

export default pickerStyles;