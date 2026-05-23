import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// ============================================
// IMPOSTAZIONI - Switch, opzioni, righe
// ============================================

export const settingsStyles = StyleSheet.create({
    // Riga impostazione con switch
    settingOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    
    // Testo label impostazione
    settingText: {
        fontSize: 16,
        color: COLORS.textPrimary,
    },
    
    // Valore impostazione (destra)
    settingValue: {
        fontSize: 16,
        color: COLORS.primary,
        fontWeight: '600',
    },
    
    // Riga con input
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.borderLight,
    },
});

export default settingsStyles;