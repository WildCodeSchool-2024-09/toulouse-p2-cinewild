import "./App.css";
import { FavoritesProvider } from "./components/FavoritesContext";
import HomeScreen from "./components/HomeScreen";

const App: React.FC = () => {
  return <FavoritesProvider>{<HomeScreen />}</FavoritesProvider>;
};

export default App;
