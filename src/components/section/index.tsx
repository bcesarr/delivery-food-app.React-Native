import { View, Text, Pressable } from 'react-native';

// Passando as props (como no react) para usar o componente de forma dinamica, com suas informações dinamicas para cada componente
interface Props {
    name: string;
    size: "text-lg" | "text-xl" | "text-2xl";
    label: string;
    // Ação do botão - vazia, será passado onde o componente é chamado
    action: () => void;
}

// Forma de passar as props nos paramentros do componente
export function Section({name, size, label, action}: Props) {
    return (
        <View className="flex flex-row justify-between items-center w-full px-4">
            <Text className={`self-start ${size} font-semibold my-4`}>{name}</Text>
            
            <Pressable onPress={action}>
                <Text>{ label }</Text>
            </Pressable>

        </View>
    );
}