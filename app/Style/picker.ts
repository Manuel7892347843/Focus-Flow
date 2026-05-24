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
        backgroundColor: 'rgba(30, 202, 211, 0.15)',
        borderRadius: 12,
        padding: 8,
        alignItems: 'center',
        minWidth: 90,
        borderWidth: 2,
        borderColor: 'rgba(30, 202, 211, 0.4)',
    },
    
    picker: {
        height: 80,
        width: 100,
        color: '#EAF2F8',
    },
    
    pickerItem: {
        color: '#EAF2F8',
        fontSize: 18,
        fontWeight: '700',
    },
    
    dots: {
        color: '#1ECAD3',
        fontSize: 28,
        fontWeight: 'bold',
        opacity: 0.8,
    },
});

export default pickerStyles;
