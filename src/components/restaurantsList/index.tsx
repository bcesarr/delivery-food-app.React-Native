import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { RestaurantVerticalItem } from './item';

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}

export function RestaurantsVerticalList() {
    
    const [restaurants, setRestaurants] = useState <RestaurantsProps[]> ([])

    useEffect(() => {

        // Quando carregado, o useEffect irá chamar está função
        async function getRestaurants() {

            // Url da Api fake, pegamos esta url gerada no terminal ao colocar o comando npx json-server db.json - OBS: Instalamos a biblioteca do json server primeiro (npx install json-server)
            // Pegando os dados da API e aguardando até que os dados sejam recebidos
            // const response = await fetch("http://localhost:3000/foods")  - Ao invés do localhost precisamos passar o nosso IPV4,pois a API esta rodando em local, por isso, ele vai dar um erro, por não ser HTTPS como o React Native exige
            const response = await fetch("http://192.168.15.6:3000/restaurants")
            
            // Transformando os dados recebidos no "response"(variavel) para Json
            // Por ser uma promisse, este comando pode demorar um pouco, então usamos o await aqui para que ele espere o processo de conversão até passar para a próxima etapa
            const data = await response.json()

            // Passando os dados em objeto json agora para o setRestaurants
            setRestaurants(data)
        }
        
        getRestaurants();
    },[])
    
    return (
        <View className="flex-1 w-full h-full px-4 mb-11 gap-4">
            {/* O map é utilizado para percorrer nossa lista e, a cada vez que ele passa ele renderiza um item */}
            {restaurants.map(item => (
                <RestaurantVerticalItem item={item} key={ item.id } />
            ))}
        </View>
    );
}