import React from "react";
import { TouchableOpacity, Text, 
     TouchableOpacityProps, StyleSheet
    } from "react-native";

//tipar o botão
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function ButtonSmall( {
    title,    
     ... rest
    
    }: ButtonProps ) {

    return (
        <TouchableOpacity
            style={styles.botaoPadrao1}
            { ... rest}
        >
            <Text style={styles.continuar1}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    botaoPadrao1: {
        
        backgroundColor: "#3944bc",
        height: 35, // altura
        width: 150, // largura
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50, 
        
    },
    continuar1: {
        fontSize: 19,
        color: "white",
        
    },
});