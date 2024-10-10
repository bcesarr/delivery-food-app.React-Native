import { View, Pressable, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Importando a nossa interface de tipagem do Restaurants
import { RestaurantsProps } from '..';

export function RestaurantVerticalItem({ item }: {item: RestaurantsProps}) {
    return (
        <Pressable
            className="flex flex-row justify-start items-center gap-2"
            onPress={() => console.log(`Clicou no Restaurante ${item.name}`)}
        >
            
            <Image
                source={{ uri: item.image }}
                className="w-20 h-20 rounded-full" 
            />
        
            <View className="gap-2">
                <Text className="font-bold text-base text-black leading-4" numberOfLines={2}>{item.name}</Text>
                
                <View className="flex flex-row gap-1">
                    <Ionicons name="star" size={14} color="#ca8a04" />
                    <Text className="text-sm">4.5</Text>
                </View>
            </View>

        </Pressable>

        
    );
}