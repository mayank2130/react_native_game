import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BuyCommercialProp from "@/components/BuyCommercialProp";
import BuyPersonelProp from "@/components/BuyPersonelProp";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Bought" component={BuyPersonelProp} />
      <Tab.Screen name="Market" component={BuyPersonelProp} />
    </Tab.Navigator>
  );
}
