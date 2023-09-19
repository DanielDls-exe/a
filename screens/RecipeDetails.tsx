import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';

type RecipesDetailsRouteProp = RouteProp<RecipeStackParamList, 'RecipesDetails'>;

type Props = {
  route: RecipesDetailsRouteProp;
};

export default function RecipesDetails({ route }: Props) {
  const { recipeId } = route.params;

  return (
    <SafeAreaView>
      <Text>You are on the details screen of {recipeId}</Text>
    </SafeAreaView>
  );
}
