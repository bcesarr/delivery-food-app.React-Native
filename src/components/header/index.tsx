import { View, Pressable, Text } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export function Header() {
    return (
        <View className="flex flex-row justify-between items-center w-full">
            <Pressable className="flex justify-center items-center w-11 h-11 bg-white rounded-full">
                <Ionicons name="menu" size={28} color="#121212"/>
            </Pressable>

            <View className="flex flex-col justify-center items-center">
                <Text className="text-center text-sm text-slate-800">Localização</Text>
                
                <View className="flex-row justify-center items-center gap-1">
                    <Feather name="map-pin" size={18} color="#FF0000"/>
                    <Text className="text-lg font-bold">São Paulo</Text>
                </View>

            </View>

            <Pressable className="flex justify-center items-center w-11 h-11 bg-white rounded-full">
                <Feather name="bell" size={28} color="#121212"/>
            </Pressable>

        </View>
    );
}

