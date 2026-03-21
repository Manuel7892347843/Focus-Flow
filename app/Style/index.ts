import { StyleSheet } from 'react-native';

// Import di tutti i moduli
import { bottomPanelStyles } from './bottomPanel';
import { componentStyles } from './components';
import { headerStyles } from './header';
import { historyStyles } from './history';
import { layoutStyles } from './layout';
import { modalStyles } from './modal';
import { modeStyles } from './modes';
import { pickerStyles } from './picker';
import { settingsStyles } from './settings';
import { statsStyles } from './stats';
import { timerStyles } from './timer';

// ============================================
// 🔧 EXPORT FINALE - Unione di tutti gli stili
// ============================================

export const style = StyleSheet.create({
    ...layoutStyles,
    ...headerStyles,
    ...componentStyles,
    ...modeStyles,
    ...timerStyles,
    ...pickerStyles,
    ...bottomPanelStyles,
    ...statsStyles,
    ...settingsStyles,
    ...historyStyles,
    ...modalStyles,
});

// Export individuale per import selettivi
export {
    bottomPanelStyles, componentStyles, headerStyles, historyStyles, layoutStyles, modalStyles, modeStyles, pickerStyles, settingsStyles, statsStyles, timerStyles
};

// Export colori per uso diretto
    export { COLORS } from './colors';

export default style;