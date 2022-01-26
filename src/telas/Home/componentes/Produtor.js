import React, { useReducer, useState,useMemo } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Estrelas from "../../../componentes/Estrelas";

const distanciaEmMetros = (distancia) => {
    console.log(distanciaEmMetros);
    return(
        `${distancia}m`
    );
}

export default function Produtor({ nome, imagem, distancia, estrelas }) {

    // const [selecionado, setSelecionado] = useState(false);
    const [selecionado, inverterSelecionado] = useReducer((selecionado) => !selecionado, false); 

    const distanciaTexto = useMemo(() => distanciaEmMetros(distancia), [distancia]);

    return (
        <TouchableOpacity style={styles.cartao}
            onPress={inverterSelecionado}
        >
            <Image style={styles.imagem} source={imagem} accessibilityLabel={nome} />
            <View style={styles.informacoes}>
                <View>
                    <Text style={styles.nome}>{nome}</Text>
                    <Estrelas quantidade={estrelas}
                        editavel={selecionado}
                        grande={selecionado}
                    />
                </View>
                <Text style={styles.distancia}>{distanciaTexto}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cartao:{
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        elevation:4
    },
    imagem:{
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical:16,
        marginLeft: 16
    },
    informacoes:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:8,
        marginVertical: 16,
        marginRight: 16
    },
    nome:{
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distancia:{
        fontSize: 12,
        lineHeight: 19
    }
})