import { RouteProp, useRoute, ParamListBase } from "@react-navigation/native";

import {
  Button,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { useCompany } from "@/Redux/NameContext";
// import { loadCompanyList } from "@/Redux/NameContext";
import {
  addCompany,
  removeCompany,
  emptyCompanyList,
  loadCompanyList,
} from "@/Redux/CompanyActions";
import { useDispatch, useSelector } from "react-redux";

// const { companyList, updateCompanyList, removeCompany } = useCompany();

// const getCompanies = async () => {
//   await loadCompanyList();
// };
// useEffect(() => {
//   getCompanies();
// }, []);

// const handleRemoveCompany = (companyToRemove: string) => {
//   // Call the removeCompany function with the company name to remove
//   removeCompany(companyToRemove);
// };
const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const companyList = useSelector((state: any) => state.company.companyList);

  useEffect(() => {
    // @ts-ignore
    dispatch(loadCompanyList());
  }, [dispatch]);

  const handleAddCompany = () => {
    const newCompany = "Your New Company"; // Replace with your logic to get the new company
    dispatch(addCompany(newCompany));
  };

  const handleRemoveCompany = (company: string) => {
    dispatch(removeCompany(company));
  };

  const handleEmptyCompanyList = () => {
    dispatch(emptyCompanyList());
  };

  const router = useRouter();
  return (
    <>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <View>
          <ScrollView>
            <View style={[styles.containerThree, { paddingTop: 20 }]}>
              <TouchableOpacity>
                <View
                  style={[
                    styles.cardFour,
                    styles.cardElevated,

                    {
                      paddingLeft: 20,
                      alignItems: "flex-start",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <Text>$ 13,879,011,298.60</Text>
                  <Text style={{ color: "green" }}>Total Income per hour</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.containerThree}>
              <TouchableOpacity>
                <View
                  style={[
                    styles.cardFour,
                    styles.cardElevated,

                    {
                      paddingLeft: 20,
                      alignItems: "flex-start",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <Text>25,000,000</Text>
                  <Text style={{ color: "red" }}>Total Expense per hour</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.containerThree}>
                <TouchableOpacity
                  onPress={() => router.push("/createBusinesses")}
                >
                  <View
                    style={[
                      styles.cardSix,

                      {
                        backgroundColor: "#1F75FE",

                        alignItems: "center",
                        justifyContent: "center",
                      },
                    ]}
                  >
                    <Text style={{ color: "white", letterSpacing: 0.3 }}>
                      Start a business
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.containerThree}>
                <TouchableOpacity onPress={() => router.push("/buyBusinesses")}>
                  <View
                    style={[
                      styles.cardSix,
                      styles.cardElevated,
                      {
                        backgroundColor: "#F5F5F5",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    ]}
                  >
                    <Text style={{ color: "black", letterSpacing: 0.3 }}>
                      Buy businesses
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text>Company List:</Text>

              {companyList.map((company: string, index: number) => (
                <View key={index}>
                  <Text>{company}</Text>
                  <Button
                    title="Remove"
                    onPress={() => handleRemoveCompany(company)}
                  />
                </View>
              ))}
              <Button title="Add Company" onPress={handleAddCompany} />
              <Button
                title="Empty Company List"
                onPress={handleEmptyCompanyList}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardFour: {
    height: 100,
    width: 340,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  cardSix: {
    height: 50,
    borderRadius: 10,
    marginVertical: 12,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  containerThree: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default HomeScreen;
