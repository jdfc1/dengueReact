import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 30,

    },
    text: {
        fontSize: 20,
        marginVertical: 22,
        color: 'black',

    }, 
    content: {
        paddingTop: 100, // espaço no topo
        paddingHorizontal: 10,

    },
    campoPesquisar: {
        alignItems: 'center',
        paddingBottom: 80, // espaço no fundo do botão obter/buscar/pesquisa
        
    },
    item: {
        padding: 8,
        marginVertical: 8,
        borderRadius: 10,
        marginRight: 7,
        backgroundColor: "white",
        
    },
    flatlistStyle: {
        alignItems: 'center',
        marginBottom: 25,
        paddingHorizontal: 5,
    },

    input: {
        backgroundColor: '#bdbec3',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 8,
        width: '100%',
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
    },

    inputResponse: {
        backgroundColor: '#bdbec3',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 25,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#0B4461',
        width: 140,
    },

    textResponse: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 35,
        color: 'black',
        textAlign: 'center',
        marginLeft: 10,
        paddingTop: 10,
        
    },
    
    alinhamentoLado: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 5,

    },

    alinhamentoLadoTexto: {
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
});