import { View, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// Importando os componentes
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Search } from '../components/search';
import { Section } from '../components/section';

// Pegando a altura da barra de status do dispositivo e guardando na variavel
const statusBarHeight = Constants.statusBarHeight

export default function Home() {
  return (
    <ScrollView style={{ flex: 1 }} className="
    bg-slate-200
    showsVerticalScrollIndicator={false}">
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 20 }}>
        <Header />
        <Banner />
        <Search />
      </View>

      <Section
        name="Comidas em alta"
        size="text-2xl"
        label="Veja mais"
        action={() => console.log("Clicou no veja mais")}
      />

      <Section
        name="Famosos no DevFood"
        size="text-2xl"
        label="Veja todas"
        action={() => console.log("Clicou no veja todas ")}
      />

      {/* <Text className="text-xl text-red-500">Teste do App</Text> */}
    </ScrollView>
  );
}

// O tailwind é utilizado como utilitys e classes, cada classe é como se fosse uma função do css