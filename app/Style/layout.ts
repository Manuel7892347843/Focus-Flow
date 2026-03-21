import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// ============================================
// 📱 LAYOUT - Container principali
// ============================================

export const layoutStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.backgroundMain,
    },
    background: {
        flex: 1,
        backgroundColor: COLORS.backgroundMain,
        paddingTop: 50,
    },
});

export default layoutStyles;