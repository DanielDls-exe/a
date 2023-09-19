import * as React from "react";
import { Text, StyleSheet, Image, View, ImageBackground , TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
interface Recipe {
	id: string;
	status: string;
	name: string;
	content_media: { type: string; src: string; labels: string[] }[];
	time_elaboration: number;
}
interface CardProps {
	recipeId: string;
  }
  export const Card = ({ recipeId }: CardProps) => {
	const navigation = useNavigation();
	const [recipe, setRecipe] = React.useState<Recipe | null>(null);
	
	React.useEffect(() => {
		
		fetch(`https://api-futurlife21.faable.link/recipes/${recipeId}`)
		  .then((response) => response.json())
		  .then((data: Recipe) => {
			// Verifica si se obtuvo la receta
			if (data) {
			  setRecipe(data);
			}
		  })
		  .catch((error) => {
			console.error("Error al obtener la receta:", error);
		  });
	  }, [recipeId]);
	
	  if (!recipe) {
		return null; 
	  }
	  
	  const handleCardPress = () => {
		// Navegar a la pantalla de detalles con el parámetro recipeId
		navigation.navigate('RecipesDetails', { recipeId: recipe.id });
	  };
  	
  	return (
		<TouchableOpacity onPress={handleCardPress}>
    		<View style={styles.cardContainer}>
      			<ImageBackground style={styles.imageIcon} resizeMode="cover" source={{ uri: recipe.content_media[0].src }}>
        				<View style={[styles.icon, styles.tagPosition]}>
          					<Image style={styles.iconplus} resizeMode="cover" source={require('../img/Plus.png')} />
        				</View>
      			</ImageBackground>
      			<View style={styles.content}>
        				<View style={styles.tagsSpaceBlock}>
                        <Text style={styles.title}>{recipe.name}</Text>
          					<View style={styles.icons}>
            						<Image style={[styles.iconSave1, styles.iconLayout]} resizeMode="cover" source={require('../img/Save.png')} />
          					</View>
        				</View>
        				<View style={[styles.tags, styles.tagsSpaceBlock]}>
          					<View style={styles.tag1FlexBox}>
            						<Image style={[styles.iconSave1, styles.iconLayout]} resizeMode="cover" source={require('../img/Star-Filled.png')} />
            						<Text style={[styles.subtitle, styles.subtitleTypo]}>4.5</Text>
          					</View>
          					<View style={styles.tags1}>
            						<View style={styles.tag1FlexBox}>
              							<Image style={styles.iconLayout} resizeMode="cover" source={require('../img/Timer.png')} />
              							<Text style={[styles.subtitle, styles.subtitleTypo]}>15’</Text>
            						</View>
            						<View style={styles.tag1FlexBox}>
              							<Text style={styles.subtitleTypo}>Difícil</Text>
            						</View>
          					</View>
        				</View>
      			</View>
    		</View>
			</TouchableOpacity>
			 );
};

const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        width: 267,
        paddingBottom: 0,
        flexDirection: "column",
        alignItems: "center",
        gap:12,
        flex: 1,
        
        justifyContent: "center", 
      },
  	tagPosition: {
    		position: "absolute",
    		flexDirection: "row"
  	},
  	tag1FlexBox: {
    		borderRadius: 8,
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	iconLayout: {
    		height: 16,
    		width: 16
  	},
  	tagsSpaceBlock: {
    		paddingVertical: 0,
    		paddingHorizontal: 12,
    		flexDirection: "row",
    		alignSelf: "stretch"
  	},
  	subtitleTypo: {
    		color: "rgba(0, 0, 0, 0.55)",
    		lineHeight: 20,
    		fontSize: 14,
    		textAlign: "left",
    		fontFamily: "Helvetica Neue"
  	},
  	label: {
    		fontSize: 12,
    		letterSpacing: -0.2,
    		color: "#fff",
    		textAlign: "left",
    		fontFamily: "Helvetica Neue",
    		fontWeight: "500",
    		lineHeight: 16
  	},
  	iconlock: {
    		width: 12,
    		height: 12,
    		marginLeft: 2
  	},
  	tag1: {
    		backgroundColor: "#ff5f71",
    		padding: 4,
    		justifyContent: "center"
  	},
  	tag: {
    		top: 8,
    		left: 8,
    		flexDirection: "row"
  	},
  	iconplus: {
    		width: 20,
    		height: 20
  	},
  	icon: {
    		marginTop: -66,
    		top: "50%",
    		right: 8,
    		borderRadius: 6,
    		padding: 6,
    		flexDirection: "row",
    		backgroundColor: "#fff",
    		position: "absolute"
  	},
  	imageIcon: {
    		borderTopLeftRadius: 16,
    		borderTopRightRadius: 16,
    		height: 148,
    		alignSelf: "stretch"
  	},
  	title: {
    		color: "rgba(0, 0, 0, 0.8)",
    		fontSize: 14,
    		textAlign: "left",
    		fontFamily: "Helvetica Neue",
    		fontWeight: "500",
    		lineHeight: 16,
    		flex: 1
  	},
  	iconSave1: {
    		overflow: "hidden"
  	},
  	icons: {
    		paddingTop: 2,
    		marginLeft: 16,
    		flexDirection: "row"
  	},
  	subtitle: {
    		marginLeft: 4
  	},
  	tags1: {
    		width: 82,
    		justifyContent: "space-between",
    		marginLeft: 8,
    		flexDirection: "row"
  	},
  	tags: {
    		marginTop: 8
  	},
  	content: {
    		marginTop: 12,
    		alignSelf: "stretch"
  	},
  	card: {
    		borderRadius: 16,
    		borderStyle: "solid",
    		borderColor: "rgba(0, 0, 0, 0.08)",
    		borderWidth: 1,
    		width: "100%",
    		paddingBottom: 12,
    		alignItems: "center",
    		flex: 1,
    		backgroundColor: "#fff"
  	}
});

