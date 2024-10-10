import { View, Pressable, Text, Image } from 'react-native';

// Importando a nossa interface de tipagem do Trending
import { FoodProps } from '..';
import { Ionicons } from '@expo/vector-icons';

export function CardHorizontalFood({ food }: { food: FoodProps }) {
    return (
        <Pressable
            className="flex flex-col rounded-xl relative"
            onPress={() => console.log(`Clicou na comida: ${food.name}`)}
        >
            <Image
                source={{ uri: food.image }}
                className="w-44 h-36 rounded-xl"

            />
            
            <View className="flex flex-row justify-center items-center bg-neutral-900/90 rounded-full px-2 py-1 absolute top-2 right-2 gap-1">
                <Ionicons name="star" size={14} color="#ca8a04"></Ionicons>
                <Text className="text-sm text-white">{ food.rating }</Text>
            </View>

            <Text className="font-medium text-lg text-green-700">R$ { food.price  }</Text>
            <Text className="text-black mt-1">{ food.name }</Text>
            <Text className="text-sm text-neutral-600">{food.time} - R$ { food.delivery }</Text>
        </Pressable>
    );
}