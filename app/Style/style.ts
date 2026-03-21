import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#0B1A2B',
        paddingTop: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#1ECAD3',
    },
    sub_title: {
        fontSize: 14,
        alignSelf: 'center',
        color: '#A9B7C6',
        marginTop: 8,
    },
    mode_pane: {
        flexDirection: 'row',
        backgroundColor: '#13243A',
        borderRadius: 12,
        marginTop: 30,
        alignSelf: 'center',
        padding: 6,
        gap: 4,
    },
    mode_button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        gap: 8,
    },
    mode_button_active: {
        backgroundColor: '#0B1A2B',
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },
    mode_text: {
        color: '#A9B7C6',
        fontSize: 13,
        fontWeight: '500',
    },
    mode_text_active: {
        color: '#EAF2F8',
    },
    clock_text:{
        fontSize: 60,
        fontWeight: 'bold',
        color: '#EAF2F8',
        position: 'absolute',
        marginTop: 65,
        marginRight: 20
    },
    start_button:{
        backgroundColor: '#1ECAD3',
        padding: 12,
        borderRadius: 12,
        marginTop: 30,
        width: 150,
    },
    start_button_text:{
        color: '#0B1A2B',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    stop_button:{
        backgroundColor: '#1ECAD3',
        padding: 12,
        borderRadius: 12,
        marginTop: 30,
        width: 90
    },
    clock_position:{
        flex:1, 
        alignItems:'center',
        marginTop: 10
    }
});