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
        marginTop: 20,
        marginBottom: 15,
    },
    
    pickerBox: {
        backgroundColor: 'rgba(30, 202, 211, 0.25)',
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
        minWidth: 140,
        borderWidth: 2,
        borderColor: 'rgba(30, 202, 211, 0.6)',
        overflow: 'hidden',
    },
    
    picker: {
        height: 100,
        width: 140,
        color: '#EAF2F8',
    },
    
    pickerItem: {
        color: '#EAF2F8',
        fontSize: 20,
        fontWeight: '700',
    },
    
    dots: {
        color: '#1ECAD3',
        fontSize: 32,
        fontWeight: 'bold',
        opacity: 0.9,
    },
});

export default pickerStyles;
