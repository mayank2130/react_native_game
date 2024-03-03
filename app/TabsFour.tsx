import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BuyCommercialProp from "@/components/BuyCommercialProp";
import BuyPersonelProp from "@/components/BuyPersonelProp";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Bought" component={BuyCommercialProp} />
      <Tab.Screen name="Market" component={BuyCommercialProp} />
    </Tab.Navigator>
  );
}
