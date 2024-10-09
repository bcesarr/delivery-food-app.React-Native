// Importando o arquivo global.css diretamente, sem especificação
import '../styles/global.css';

// Alterado de Stack para Slot
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    // Removendo as configurações Stack e passando a importação do Slot. Ele passa toda a nossa estrutura de navegação para ca.
    <Slot />
  );
}
