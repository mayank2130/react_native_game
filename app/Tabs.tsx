import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../components/HomeScreen";
import BusinessScreen from "@/components/BusinessScreen";
import RelationsScreen from "@/components/RelationsScreen";
import { CompanyProvider } from "@/Redux/NameContext";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <CompanyProvider>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Capital" component={BusinessScreen} />
        <Tab.Screen name="Relations" component={RelationsScreen} />
      </Tab.Navigator>
    </CompanyProvider>
  );
}
