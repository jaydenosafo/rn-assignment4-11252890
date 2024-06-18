import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";


const FeaturedJobCard = ({ logo, jobTitle, Company, Salary, Location, backgroundColor }) => {
  return (
    <TouchableOpacity style={[styles.cardContainer, { backgroundColor: backgroundColor }]}>
      <ImageBackground source={require('../assets/Mask Group.png')}>
    <View style={styles.cardContent}>
      <View style={styles.featuredLogo}>
      <Image source={logo}
       resizeMode="contain"
       style={styles.logoImage}
      />
      </View>
      
      <View style={styles.textContainer}>
       <Text style={styles.jobTitle}>{jobTitle}</Text>
      <Text style={styles.company}>{Company}</Text>
      </View>
    </View>

    <View style={styles.cardFooter}>
      <Text style={styles.salary}>{Salary}</Text>
      <Text style={styles.location}>{Location}</Text>
    </View>
    </ImageBackground>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: 300, 
    height:180,
    padding: 20,
    borderRadius: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredLogo: {
    backgroundColor: '#fff',
    marginRight: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50
  },
  logoImage: {
    width: 30,
    height: 30,
  },
  textContainer: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff'
  },
  company: {
    fontSize: 14,
    color: '#fff',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
    color: '#fff',
  },
  salary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  location: {
    fontSize: 14,
    color: '#fff',
  }
});


export default FeaturedJobCard;