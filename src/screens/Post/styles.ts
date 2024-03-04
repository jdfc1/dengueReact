import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100, // espaço no topo

    },
    content: {
        paddingHorizontal: 10,

    },
    title: {
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 15,

    },
    text: {
        fontSize: 20,
        paddingVertical: 15,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',

    }, 
    textMaior: {
        fontSize: 21,
        color: 'black',
        textAlign: 'center',

    }, 

    flatlistStyle: {
        alignItems: 'center',

    },

    campoPesquisar: {
        alignItems: 'center',
        marginBottom: 50,

    },

    item: {
        padding: 8,
        marginVertical: 8,
        borderRadius: 10,
        marginRight: 7,
        backgroundColor: "white",
        
    },
    
    input: {
        backgroundColor: '#bdbec3',
        borderRadius: 10,
        fontSize: 23,
        textAlign: 'center',
        paddingVertical: 10,
        marginTop: 10,
        width: '100%',
        color: 'black',

    },

    semana: {
        justifyContent: 'center',
        alignItems: 'center',
        //width: 350,
    },

    pontoSemana: {
        width: '110%',
        height: 50,
        borderRadius: 20,
        backgroundColor: 'transparent', // fundo transparente
        borderWidth: 6, // largura da borda
        borderColor: '#0B4461', // cor da borda 
    },

    inputResponse: {
        backgroundColor: '#bdbec3',
        borderRadius: 10,
        width: 140,
        fontSize: 23,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#0B4461',
        paddingVertical: 10,
    },

    textResponse: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        paddingTop: 10,
    },
    
    alinhamentoLado: {
        marginTop: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    alinhamentoLadoTexto: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        textAlign: 'right',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    

});