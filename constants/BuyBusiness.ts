import { ImageSourcePropType } from "react-native";

export interface BuyBusinessTypes {
  id: string;
  name: string;
  price: number;
  source: ImageSourcePropType; // Assuming that the source property should be of type ImageSourcePropType
  onPress: () => any; // Define the onPress property as a function
}

export interface FormulaOneTeam {
  id: string;
  name: string;
  price: number;
}

export const formulaOneTeams: FormulaOneTeam[] = [
  { id: "1", name: "Mercedes-AMG Petronas Formula One Team", price: 50000000 },
  { id: "2", name: "Red Bull Racing", price: 48000000 },
  { id: "3", name: "Scuderia Ferrari", price: 52000000 },
  { id: "4", name: "McLaren F1 Team", price: 45000000 },
  { id: "5", name: "Aston Martin Cognizant Formula One Team", price: 49000000 },
  { id: "6", name: "Alpine F1 Team", price: 47000000 },
  { id: "7", name: "Scuderia AlphaTauri", price: 46000000 },
  { id: "8", name: "Alfa Romeo Racing Orlen", price: 44000000 },
  { id: "9", name: "Williams Racing", price: 42000000 },
  { id: "10", name: "Uralkali Haas F1 Team", price: 40000000 },
];

export const buyBusinesses: BuyBusinessTypes[] = [
  {
    id: "1",
    name: "Airline",
    price: 1000000,
    source: require("../assets/images/planetwo.png"),
    onPress: () => "/(modals)/Airline",
  },
  {
    id: "2",
    name: "Football Club",
    price: 800000,
    source: require("../assets/images/football-field.png"),
    onPress: () =>
      /* Your onPress function for Football Club */
      "/(modals)/Airline",
  },
  {
    id: "3",
    name: "F1 Team",
    price: 1200000,
    source: require("../assets/images/formula.png"),
    onPress: () =>
      /* Your onPress function for F1 Team */
      "/(modals)/Airline",
  },
  {
    id: "4",
    name: "Shipping Company",
    price: 1500000,
    source: require("../assets/images/cargo-ship.png"),
    onPress: () =>
      /* Your onPress function for Shipping Company */
      "/(modals)/Airline",
  },
  {
    id: "5",
    name: "Adult Entertainment Company",
    price: 2000000,
    source: require("../assets/images/xxx.png"),
    onPress: () =>
      /* Your onPress function for Adult Entertainment Company */
      "/(modals)/Airline",
  },
  {
    id: "6",
    name: "Movie Studio",
    price: 1800000,
    source: require("../assets/images/video-player.png"),
    onPress: () => {
      /* Your onPress function for Movie Studio */
      "/(modals)/Airline";
    },
  },
  {
    id: "7",
    name: "TV Network",
    price: 1600000,
    source: require("../assets/images/broadcast.png"),
    onPress: () =>
      /* Your onPress function for TV Network */
      "/(modals)/Airline",
  },
  {
    id: "8",
    name: "Media Platform",
    price: 2200000,
    source: require("../assets/images/social-media.png"),
    onPress: () =>
      /* Your onPress function for Media Platform */
      "/(modals)/Airline",
  },
  {
    id: "9",
    name: "Casino",
    price: 2500000,
    source: require("../assets/images/casino-roulette.png"),
    onPress: () =>
      /* Your onPress function for Casino */
      "/(modals)/Airline",
  },
  {
    id: "10",
    name: "Resorts",
    price: 2300000,
    source: require("../assets/images/resort.png"),
    onPress: () =>
      /* Your onPress function for Resorts */
      "/(modals)/Airline",
  },
  // Add more objects for other businesses
];
