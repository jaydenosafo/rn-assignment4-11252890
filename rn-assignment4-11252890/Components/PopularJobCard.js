import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";


const PopularJobCard = ({popularCompany, popularJobName, popularLocation, popularSalary, popularLogo,
  backgroundColor
}) => {
  return (
    <View style={[styles.FeaturedContainer, { backgroundColor: backgroundColor }]}>
            <View style={styles.logoContainer}>
              <Image source={popularLogo} style={styles.logo}/>
            </View>
            <View style={styles.jobInfo}>
             <Text style={styles.popularJobName}>{popularJobName}</Text>
             <Text style={styles.popularCompany}>{popularCompany}</Text>
            </View>
            <View style={styles.salaryLocation}>
             <Text style={styles.popularSalary}>{popularSalary}</Text>
             <Text style={styles.popularLocation}>{popularLocation}</Text>
            </View>
          </View>
  )
}

const styles = StyleSheet.create({
  FeaturedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
   },
   logoContainer: {
    marginRight: 16
   },
   logo: {
    width: 40,
    height: 40
   },
   jobInfo: {
    flex: 1
   },
   popularJobName: {
    fontSize: 16,
    fontWeight: 'bold'
   },
   popularCompany: {
    fontSize: 14,
    color: '#888'
   },
   salaryLocation: {
    flexDirection: 'column'
   },
   popularSalary: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 14
   },
   popularLocation: {
    fontSize: 14,
    color: '#888'
   }
})

export default PopularJobCard