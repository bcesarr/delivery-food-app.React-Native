import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function Search() {
    return (
    <View className="flex-row items-center w-full h-14 border border-slate-500 rounded-full bg-transparent px-4 gap-2">
        <Feather name="search" size={24} color="#64748b" />
        
            <TextInput placeholder="O que você quer comer? "
            className="flex-1 w-full h-full bg-transparent"/>

    </View>
    );
}