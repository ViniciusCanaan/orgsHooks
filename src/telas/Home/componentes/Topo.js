import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import logo from '../../../assets/logo.png';

export default function Topo() {
    return (
        <View style={styles.topo}>
            <Image style={styles.imagem} source={logo} />
            <Text style={styles.boasVindas}>Olá Vinícius</Text>
            <Text style={styles.legenda}>Encontre os melhores produtores</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    imagem:{
        width: 70,
        height: 28
    },
    boasVindas:{
        marginTop: 24,
        fontSize:26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    legenda:{
        fontSize: 16,
        lineHeight:26
    }
});