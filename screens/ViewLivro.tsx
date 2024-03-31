import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Card } from "react-native-paper";
import { estilo } from './Home'
import axios from 'axios';

export default function ViewLivro({ route }) {
  const { id } = route.params;
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    fetchLivro();
  }, []);

  const fetchLivro = async () => {
    try {
      const response = await axios.get(`https://bibliotecaetecmaua.azurewebsites.net/api/LivrosSedeApi/${id}`);
      setLivro(response.data);
    } catch (error) {
      console.error("Erro ao buscar livro:", error);
    }
  };

  return (
    <View>
      {livro && (
        <>
        <Card style={estilo.cardEstilo}>
            <Card.Title title={"Titulo: " + livro.titulo} titleStyle={{fontWeight: 'bold',}}/>
            <Card.Cover resizeMode="center" source={{ uri: `https://bibliotecaetecmaua.azurewebsites.net/Content/Images/${livro.imagem}` }}></Card.Cover>

            <Card.Content>
                <Text><b>{"Autor: "}</b> {livro.autorPrincipal}</Text>
                <Text><b>{"Editora: " } </b>{ livro.editora}</Text>
                <Text><b>{"Assuntos: " } </b>{ livro.assuntos}</Text>
                <Text><b>{"Autores: " } </b>{ livro.autores}</Text>
                <Text><b>{"Obra: " } </b>{ livro.obra}</Text>
                <Text><b>{"Idioma: " } </b>{ livro.idioma}</Text>
                <Text><b>{"Ano: " } </b>{ livro.ano}</Text>
                <Text><b>{"Material: " } </b>{ livro.material}</Text>
                <Text><b>{"ISBN/ISSN: " } </b>{ livro.isbnIssn}</Text>
                <Text><b>{"Edição: " } </b>{ livro.edicao}</Text>
            </Card.Content>     
            
            
         </Card>
        </>
      )}
    </View>
  );
}