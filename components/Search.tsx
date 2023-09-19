import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

export const TextInput1 = () => {
  	
  	return (
    		<View style={styles.textInput}>
      			<View style={styles.field}>
        				<Image style={styles.iconplaceholderopt} resizeMode="cover" source={require('../img/Search.png')} />
        				<Text style={styles.placeholder}>Recetas, ingredientes, etc.</Text>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	iconplaceholderopt: {
    		width: 20,
    		height: 20
  	},
  	placeholder: {
    		fontSize: 14,
    		lineHeight: 20,
    		fontFamily: "Helvetica Neue",
    		color: "rgba(0, 0, 0, 0.55)",
    		textAlign: "left",
    		marginLeft: 8,
    		flex: 1
  	},
  	field: {
    		alignSelf: "stretch",
    		borderRadius: 12,
    		borderStyle: "solid",
    		borderColor: "rgba(0, 0, 0, 0.25)",
    		borderWidth: 1,
    		height: 44,
    		overflow: "hidden",
    		flexDirection: "row",
    		paddingHorizontal: 16,
    		paddingVertical: 0,
    		alignItems: "center"
  	},
  	textInput: {
    		flex: 1,
            display: "flex",
            width: 358,
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 4

  	}
});


