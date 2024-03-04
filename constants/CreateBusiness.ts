export interface CreateBusinessTypes {
  id: string;
  name: string;
  price: number;
  source: number;
  onPress: () => any; // Define the onPress property as a function
}

export interface ShopPrice {
  id: string;
  price: number;
  name: string;
}

export const shopPrice: ShopPrice[] = [
  { id: "1", price: 5000, name: "Local Shop" },
  { id: "2", price: 42000, name: "A Small Chain of Shops" },
  { id: "3", price: 250000, name: "Large Chain of Shops" },
];

export const createBusinessTypes: CreateBusinessTypes[] = [
  {
    id: "1",
    name: "Grocery Store",
    price: 0,
    source: require("../assets/images/grocery-cart.png"),
    onPress: () => "/(modals)/GroceryStore",
  },
  {
    id: "2",
    name: "Factory",
    price: 0,
    source: require("../assets/images/factory.png"),
    onPress: () => "/(modals)/GroceryStore",
  },
  {
    id: "3",
    name: "Construction Company",
    price: 0,
    source: require("../assets/images/construction-site.png"),
    onPress: () => "/(modals)/GroceryStore",
  },
  {
    id: "4",
    name: "Intelligence  Company",
    price: 0,
    source: require("../assets/images/spyware.png"),
    onPress: () => "/(modals)/GroceryStore",
  },
  {
    id: "5",
    name: "Bank",
    price: 0,
    source: require("../assets/images/bank.png"),
    onPress: () => "/(modals)/GroceryStore",
  },
  {
    id: "6",
    name: "Tech Startup",
    price: 0,
    source: require("../assets/images/virtual-reality.png"),
    onPress: () => "/(modals)/GroceryStore",
  },
  {
    id: "7",
    name: "Oil & Gas Company",
    price: 0,
    source: require("../assets/images/oil-rig.png"),
    onPress: () => "/(modals)/GroceryStore",
  },
  {
    id: "8",
    name: "Power Plants",
    price: 0,
    source: require("../assets/images/electric-factory.png"),
    onPress: () => "/(modals)/GroceryStore",
  },
  {
    id: "9",
    name: "Drug Cartel",
    price: 0,
    source: require("../assets/images/cocaine_4612345.png"),
    onPress: () => "/(modals)/GroceryStore",
  },
  {
    id: "10",
    name: "Arms Dealer",
    price: 0,
    source: require("../assets/images/launcher_942492.png"),
    onPress: () => "/(modals)/GroceryStore",
  },
];
