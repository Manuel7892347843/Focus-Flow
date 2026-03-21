import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// ============================================
// 📊 PANNELLO BOTTOM - Sessioni, statistiche, storico
// ============================================

export const bottomPanelStyles = StyleSheet.create({
    // Container principale pannello
    bottomPanel: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.backgroundPanel,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
        overflow: 'hidden',
    },
    
    // Header trascinabile
    panelHeader: {
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 15,
        backgroundColor: COLORS.backgroundPanel,
        zIndex: 10,
    },
    
    // Maniglia drag
    dragHandle: {
        width: 40,
        height: 5,
        backgroundColor: COLORS.textMuted,
        borderRadius: 3,
        marginBottom: 8,
    },
    
    // Area touch invisibile per gesture
    dragArea: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        zIndex: 5,
    },
    
    // Titoli pannello
    panelTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textPrimary,
    },
    panelSubtitle: {
        fontSize: 13,
        color: '#666',
        marginTop: 4,
        fontStyle: 'italic',
    },
    
    // Contenuto scrollabile
    panelScrollContent: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: COLORS.backgroundPanel,
    },
});

export default bottomPanelStyles;