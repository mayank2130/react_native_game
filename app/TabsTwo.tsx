import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../components/HomeScreen";
import BusinessScreen from "@/components/BusinessScreen";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Professional" component={HomeScreen} />
      <Tab.Screen name="Personal" component={BusinessScreen} />
    </Tab.Navigator>
  );
}
