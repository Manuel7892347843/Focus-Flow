import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// ============================================
// 🏠 HEADER - Titolo, sottotitolo, bottoni header
// ============================================

export const headerStyles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    headerButtons: {
        flexDirection: 'row',
        gap: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    sub_title: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginTop: 8,
    },
    // Bottone impostazioni in header
    settingsButton: {
        padding: 10,
        borderRadius: 12,
        backgroundColor: COLORS.primaryLight,
        borderWidth: 1,
        borderColor: COLORS.primaryBorder,
    },
    settingsIcon: {
        fontSize: 20,
    },
});

export default headerStyles;