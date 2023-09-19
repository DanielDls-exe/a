import * as React from "react";
import {Image, StyleSheet, View} from "react-native";

export const TabBar = () => {
  	
  	return (
    		<View style={styles.tabBar1}>
      			<View style={styles.tabs}>
        				<View style={styles.tabFlexBox}>
          					<Image style={styles.icon5} resizeMode="cover" source={require('../img/icon1.png')} />
        				</View>
        				<View style={[styles.tabBarTab6, styles.tabFlexBox]}>
          					<Image style={styles.icon5} resizeMode="cover" source={require('../img/icon2.png')} />
        				</View>
        				<View style={[styles.tabBarTab6, styles.tabFlexBox]}>
          					<Image style={styles.icon5} resizeMode="cover" source={require('../img/icon3.png')} />
        				</View>
        				<View style={[styles.tabBarTab6, styles.tabFlexBox]}>
          					<Image style={styles.icon5} resizeMode="cover" source={require('../img/icon4.png')} />
        				</View>
        				<View style={[styles.tabBarTab6, styles.tabFlexBox]}>
          					<Image style={styles.icon5} resizeMode="cover" source={require('../img/icon5.png')} />
        				</View>
      			</View>
      			<View style={styles.bar1} />
    		</View>);
};

const styles = StyleSheet.create({
  	tabFlexBox: {
    		justifyContent: "center",
    		paddingVertical: 0,
    		paddingHorizontal: 8,
    		height: 56,
    		alignItems: "center",
    		flex: 1
  	},
  	icon5: {
    		width: 24,
    		height: 24,
    		overflow: "hidden"
  	},
  	tabBarTab6: {
    		borderRadius: 4
  	},
  	tabs: {
    		alignSelf: "stretch",
    		flexDirection: "row"
  	},
  	bar1: {
    		borderRadius: 8,
    		backgroundColor: "#000",
    		width: 104,
    		height: 5
  	},
  	tabBar1: {
    		backgroundColor: "#fff",
    		borderStyle: "solid",
    		borderColor: "rgba(0, 0, 0, 0.08)",
    		borderTopWidth: 1,
    		width: "100%",
    		paddingBottom: 8,
    		alignItems: "center",
    		flex: 1,
    		overflow: "hidden"
  	}
});


