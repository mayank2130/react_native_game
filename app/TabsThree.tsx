import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StockMarket from "@/components/StockMarket";
import RealEstate from "@/components/RealEstate";
import Crypto from "@/components/Crypto";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Stock Market" component={StockMarket} />
      <Tab.Screen name="Real Estate" component={RealEstate} />
      <Tab.Screen name="Crypto" component={Crypto} />
    </Tab.Navigator>
  );
}
