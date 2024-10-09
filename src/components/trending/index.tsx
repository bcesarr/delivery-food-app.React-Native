import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { CardHorizontalFood } from './food'

// Passando uma tipagem para o nosso array do useState - vamos exporta-la para reutiliza-la no CardHorizontalFood
export interface FoodProps {
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurantId: string;
}

export function TrendingFoods() {
    
    // Propriedades para a FlatList
    // O useState vai receber uma lista/array e cada objeto recebe uma propriedade desta lista
    const [foods, setFoods] = useState <FoodProps[]> ([])

    // Quando nosso componente for carregado o useEffect via entrar em ação...
    useEffect(() => {

        // Quando carregado, o useEffect irá chamar está função
        async function getFoods() {

            // Url da Api fake, pegamos esta url gerada no terminal ao colocar o comando npx json-server db.json - OBS: Instalamos a biblioteca do json server primeiro (npx install json-server)
            // Pegando os dados da API e aguardando até que os dados sejam recebidos
            // const response = await fetch("http://localhost:3000/foods")  - Ao invés do localhost precisamos passar o nosso IPV4,pois a API esta rodando em local, por isso, ele vai dar um erro, por não ser HTTPS como o React Native exige
            const response = await fetch("http://192.168.15.6:3000/foods")
            
            // Transformando os dados recebidos no "response"(variavel) para Json
            // Por ser uma promisse, este comando pode demorar um pouco, então usamos o await aqui para que ele espere o processo de conversão até passar para a próxima etapa
            const data = await response.json()

            // Passando os dados em objeto json agora para o setFoods
            setFoods(data)
        }
        
        getFoods();
    },[])

    return (
        <FlatList
            data={foods}
            
            // Quando o componente renderizar, cada item/card vai ser o componente "CardHorizontalFood", ou seja, cara elemento que estiver lá neste componeten
            renderItem={({ item }) => <CardHorizontalFood food={item} />}
            
            horizontal={true}
            
            // Para dar um style/estilo dentro do nossos itens que estão dentro do card
            contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, gap: 14 }}

            // Para remover a barra horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
}