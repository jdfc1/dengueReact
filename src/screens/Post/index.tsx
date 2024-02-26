import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput,
    FlatList, TouchableOpacity, Alert} from "react-native";

import { styles } from "./styles";

import { ButtonSmall } from "../../components/buttonSmall";

import { cidades } from '../../components/cidades';

import { diaSemanaInicial } from '../../components/diaSemanaInicial';
import { diaSemanaFinal } from '../../components/diaSemanaFinal';

import { anoInicial } from '../../components/anoInicial';
import { anoFinal } from '../../components/anoFinal';

import fetchData from '../../components/consultaApi';
 
export function Post () {

    const [ doenca, setDoenca ] = useState ([
        { id: 'dengue', title: 'Dengue' },
        { id: 'chikungunya', title: 'Chikungunya' },
        { id: 'zika', title: 'Zika' },
    ]);

    const [ selectedItem, setSelectedItem ] = useState(null); // seleção da doença para pesquisa
    const [ selecaoCidade, setselecaoCidade ] = useState(null); // cidade
    const [ selecaoSemanaInicial, setSelecaoSemanaInicial ] = useState(null); // semana inicial
    const [ selecaoSemanaFinal, setSelecaoSemanaFinal ] = useState(null); // semana final
    const [ selecaoAnoInicial, setSelecaoAnoInicial ] = useState(null);  // ano inicial
    const [ selecaoAnoFinal, setSelecaoAnoFinal ] = useState(null); // ano final
    const [ searchTerm, setSearchTerm] = useState(''); // pesquisa
    
    const [ casos, setCasos ] = useState(''); // casos
    const [ populacao, setPopulacao ] = useState(''); // populacao
    const [ umidade, setUmidade ] = useState(''); // umidade
    const [ nivel, setNivel ] = useState(''); //

    async function obterResultadosApi () {
        
        if ( selectedItem === null ) {
            Alert.alert("Selecione a Doença para consulta.")
        }
        else if ( selecaoCidade === null ) {
            Alert.alert("Busque a cidade desejada para consulta")
            
        }
        else if ( selecaoSemanaInicial === null || selecaoSemanaFinal === null ) {
            Alert.alert("Selecione todas as opções semanais corretamente")
        }
        else if ( selecaoAnoInicial === null || selecaoAnoFinal === null ) {
            Alert.alert("Selecione todas os anos desejados.")
        }
        else {
            console.log('doença:',selectedItem, 'cidade:', selecaoCidade, 'Se_Inicial:', selecaoSemanaInicial, 'Se_Final:', selecaoSemanaFinal, 'ano_inicial:', selecaoAnoInicial, 'ano_final:', selecaoAnoFinal )

            fetchData(selecaoCidade, selectedItem, selecaoSemanaInicial, selecaoSemanaFinal, selecaoAnoInicial, selecaoAnoFinal )
            .then(data => {
                //console.log(data);
                setCasos(data[0].notif_accum_year);
                setPopulacao(data[0].pop);
                //setUmidade(data[0].umidmed);

                let soma = 0;
                data.forEach(item => {
                    soma += item.umidmed;
                });
                const media = soma / data.length;
                setUmidade(media.toFixed(2)+"%");
                //console.warn(media);

                let soma1 = 0;
                data.forEach(item1 => {
                    soma1 += item1.nivel;
                });
                const media1 = soma1 / data.length;
                setNivel(media1.toFixed(2)+"%");
                //console.warn(media);

            })
            .catch(error => {
            console.error(error);
            });
            }
        
    }

    const pressHandler = (id) => {
        console.log(id);
        setSelectedItem(id);
    }

    const pressHandlerCidade = (id) => {
        console.log(id);
        setselecaoCidade(id);
    }

    const pressSemanaInicial = (id) => {
        console.log(id);
        setSelecaoSemanaInicial(id);

        if (id < selecaoSemanaFinal) {
            setSelecaoSemanaInicial(id);
        }else{
            setSelecaoSemanaFinal(id);
        }
    }

    const pressSemanaFinal = (id) => {
        console.log(id);
        setSelecaoSemanaFinal(id);

        if (id > selecaoSemanaInicial) {
            setSelecaoSemanaFinal(id);
        }else{
            setSelecaoSemanaInicial(id);
        }

    }

    const pressAnoInicial = (id) => {
        console.log(id);
        setSelecaoAnoInicial(id);

        if (id < selecaoAnoFinal) {
            setSelecaoAnoInicial(id);
        }else{
            setSelecaoAnoFinal(id);
        }
    }
    
    const pressAnoFinal = (id) => {
        console.log(id);
        setSelecaoAnoFinal(id);

        if (id > selecaoAnoInicial) {
            setSelecaoAnoFinal(id);
        }else{
            setSelecaoAnoInicial(id);
        } 
    }
    


    const filteredCidades = cidades.filter((cidade) =>
        cidade.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <View style={styles.container} >
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={styles.content}
                
                >
                <Text style={styles.title} >
                    Cuidado com a Dengue
                </Text>

                <View>
                    <Text style={styles.text}>
                        Preencha todos os dados apenas com um toque: Neste campo preencha para qual Doença você quer fazer a pesquisa.
                    </Text>
                    <View style={styles.flatlistStyle}>
                        <FlatList 
                            keyExtractor={(item) => item.id}
                            data={doenca}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => pressHandler(item.id) }
                                    style={[styles.item, { backgroundColor: selectedItem === item.id ? '#3944bc' : '#bdbec3' }]}
                                >
                                    <Text style={[{ color: selectedItem === item.id ? 'white' : '#3944bc' }]}>{item.title}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    
                </View>
                
                <View >

                    <Text style={styles.text}>
                        Localize a sua cidade para consulta.
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Pesquisar cidade"
                        onChangeText={setSearchTerm}
                        value={searchTerm}
                    />

                    <FlatList
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        data={filteredCidades}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => pressHandlerCidade(item.id)}
                                style={[styles.item, { backgroundColor: selecaoCidade === item.id ? '#3944bc' : '#bdbec3' }]}
                            >
                                <Text style={[{ color: selecaoCidade === item.id ? 'white' : '#3944bc' }]}>{item.title}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                
                <View style={styles.flatlistStyle}>
                    <Text style={styles.text}>
                        Escolha o número da Semana Inicial para sua pesquisa.
                    </Text>
                    <FlatList
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        data={diaSemanaInicial}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => pressSemanaInicial(item.id) }
                                style={[styles.item, { backgroundColor: selecaoSemanaInicial === item.id ? '#3944bc' : '#bdbec3' }]}
                            >
                                <Text style={[{ color: selecaoSemanaInicial === item.id ? 'white' : '#3944bc' }]}>{item.title}</Text>
                            </TouchableOpacity>
                        )}
                    />

                </View>

                <View style={styles.flatlistStyle}>
                    <Text style={styles.text}>
                        Escolha o número da Semana Final para sua pesquisa. 
                    </Text>
                    <FlatList
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        data={diaSemanaFinal}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => pressSemanaFinal(item.id) }
                                style={[styles.item, { backgroundColor: selecaoSemanaFinal === item.id ? '#3944bc' : '#bdbec3' }]}
                            >
                                <Text style={[{ color: selecaoSemanaFinal === item.id ? 'white' : '#3944bc' }]}>{item.title}</Text>
                            </TouchableOpacity>
                        )}
                    />

                </View>

                <View style={styles.flatlistStyle} >
                    <Text style={styles.text}>
                        Escola o dia da Ano Inicial para sua pesquisa.
                    </Text>
                    <FlatList
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        data={anoInicial}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => pressAnoInicial(item.id) }
                                style={[styles.item, { backgroundColor: selecaoAnoInicial === item.id ? '#3944bc' : '#bdbec3' }]}
                            >
                                <Text style={[{ color: selecaoAnoInicial === item.id ? 'white' : '#3944bc' }]}>{item.title}</Text>
                            </TouchableOpacity>
                        )}
                    />

                </View>

                <View style={styles.flatlistStyle}>
                    <Text style={styles.text}>
                        Escola o dia da Ano Final para sua pesquisa.
                    </Text>
                    <FlatList
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        data={anoFinal}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => pressAnoFinal(item.id) }
                                style={[styles.item, { backgroundColor: selecaoAnoFinal === item.id ? '#3944bc' : '#bdbec3' }]}
                            >
                                <Text style={[{ color: selecaoAnoFinal === item.id ? 'white' : '#3944bc' }]}>{item.title}</Text>
                            </TouchableOpacity>
                        )}
                    />

                </View>



                <View style={styles.campoPesquisar}>
                    <ButtonSmall title='Obter' onPress={obterResultadosApi}  />
                </View>


            <View style={styles.alinhamentoLado}>
                <TextInput
                    value={String(casos)}
                    onChangeText={setCasos}
                    style={styles.inputResponse}
                    editable={false}
                />
                <TextInput
                    value={String(populacao)}
                    onChangeText={setPopulacao}
                    style={styles.inputResponse}
                    editable={false}
                />
            </View>

            <View style={styles.alinhamentoLadoTexto}>
                <Text style={styles.textResponse}>
                    Acumulo de casos{"\n"}entre os valores{"\n"}pesquisados.
                </Text>
                <Text style={styles.textResponse}>
                    População estimada{"\n"}de acordo com{"\n"}o (IBGE).
                </Text>
            </View>

            <View style={styles.alinhamentoLado}>
                <TextInput
                    value={String(umidade)}
                    onChangeText={setUmidade}
                    style={styles.inputResponse}
                    editable={false}
                />
                <TextInput
                    value={String(nivel)}
                    onChangeText={setNivel}
                    style={styles.inputResponse}
                    editable={false}
                />
            </View>

            <View style={styles.alinhamentoLadoTexto}>
                <Text style={styles.textResponse}>
                    Umidade Média:{"\n"}umidade acima de{"\n"}70% contribui com o{"\n"}aumento de casos
                </Text>
                <Text style={styles.textResponse}>
                    Média Nível de alerta:{"\n"}1 = verde,{"\n"}2 = amarelo,{"\n"}3 = laranja e{"\n"}4 = vermelho.
                </Text>
            </View>

            </ScrollView>         
        </View>
    );
}
