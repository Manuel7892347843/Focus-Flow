import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// ============================================
// 📈 STATISTICHE - Box numeri, label, titoli sezione
// ============================================

export const statsStyles = StyleSheet.create({
    // Container statistiche
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        marginTop: 10,
    },
    
    // Singola box statistica
    statBox: {
        backgroundColor: COLORS.backgroundCard,
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        minWidth: 120,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    
    // Numero grande
    statNumber: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    
    // Label sotto numero
    statLabel: {
        fontSize: 12,
        color: COLORS.textPrimary,
        marginTop: 4,
    },
    
    // Titolo sezione (Storico Sessioni)
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginTop: 20,
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default statsStyles;