import { View, Pressable, Text, Image } from 'react-native';

// Importando a nossa interface de tipagem do Restaurants
import { RestaurantsProps } from '..';

export function RestaurantItem( { item }: { item: RestaurantsProps }) {
    return (
        <Pressable
            className="flex flex-col justify-center items-center"
            onPress={() => console.log(`Clicou no Restaurante ${item.name}`)}
        >

            <Image
                source={{ uri: item.image }}
                className="w-20 h-20 rounded-full"
            />

            {/* numerOfLines é o numero maximo de linhas caso o nome seja grande demais; leading é a altura entre as linhas */}
            <Text className="w-20 text-sm text-center text-black mt-2 leading-4" numberOfLines={2}>{ item.name }</Text>
        </Pressable>
    );
}