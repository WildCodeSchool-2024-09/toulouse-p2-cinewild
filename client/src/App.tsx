import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { FavoritesProvider } from "./context/FavoritesContext";

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <HomeScreen />
    </FavoritesProvider>
  );
};

export default App;
