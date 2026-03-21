import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// ============================================
// 🪟 MODAL - Overlay impostazioni, backdrop, header modal
// ============================================

export const modalStyles = StyleSheet.create({
    // Container overlay completo
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        justifyContent: 'flex-end',
    },
    
    // Sfondo scuro cliccabile
    modalBackdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: COLORS.overlay,
    },
    
    // Contenuto modal
    modalContent: {
        backgroundColor: COLORS.backgroundDark,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: '80%',
        paddingBottom: 30,
    },
    
    // Header modal con titolo e X
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.borderDark,
    },
    
    // Titolo modal
    modalTitle: {
        color: COLORS.textPrimary,
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    // Bottone chiudi X
    modalClose: {
        color: COLORS.textPrimary,
        fontSize: 24,
        padding: 5,
    },
    
    // Area scroll contenuto
    modalScroll: {
        paddingHorizontal: 20,
        maxHeight: 400,
    },
});

export default modalStyles;