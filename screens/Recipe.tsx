import React from 'react';
import { ScrollView, View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { Card } from '../components/Card';
import { TextInput1 } from '../components/Search';
import { SafeAreaView } from 'react-native';
import CustomStatusBar from '../components/StatusBar'


const RecipesScreen = () => {
  const recipeIds = ['recipe_6501883e1bf2370f0859aff5', 'recipe_6501883e1bf2370f0859afda', 'recipe_6501883e1bf2370f0859afc0']; 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomStatusBar />
      <ScrollView>
      <View style={styless.searchContainer}>
  <TextInput1 />
</View>
        <View style={styless.section}>
        <Text style={styles.tusRecetasGuardadas1}>Tus recetas guardadas</Text>
          <ScrollView horizontal={true}>
            {recipeIds.map((recipeId) => (
              
              <Card key={recipeId} recipeId={recipeId} />
            
            ))}
          </ScrollView>
        </View>

        <View style={styless.section}>
        <Text style={styles.tusRecetasGuardadas1}>Premium</Text>
          <ScrollView horizontal={true}>
            {recipeIds.map((recipeId) => (
              <Card key={recipeId} recipeId={recipeId} />
            ))}
          </ScrollView>
        </View>

        <View style={styless.section}>
        <Text style={styles.tusRecetasGuardadas1}>Nuevo Batch Cooking</Text>
          <ScrollView horizontal={true}>
            {recipeIds.map((recipeId) => (
              <Card key={recipeId} recipeId={recipeId} />
            ))}
          </ScrollView>
        </View>

        <View style={styless.section}>
        <Text style={styles.tusRecetasGuardadas1}>Desayunos</Text>
          <ScrollView horizontal={true}>
            {recipeIds.map((recipeId) => (
              <Card key={recipeId} recipeId={recipeId} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tusRecetasGuardadas1: {
  flex: 1,
  fontSize: 16,
  lineHeight: 24,
  fontWeight: "500",
  fontFamily: "Helvetica Neue",
  color: "rgba(0, 0, 0, 0.8)",
  textAlign: "left"
  }
  });

const styless = {
  section: {
    marginVertical: 20,
    marginHorizontal: 20, 
  },
  searchContainer: {
    marginVertical: 16, 
    marginHorizontal: 16, 
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
  },
};

export default RecipesScreen;


