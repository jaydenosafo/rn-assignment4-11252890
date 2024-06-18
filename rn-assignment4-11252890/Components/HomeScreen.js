import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList, ImageBackground } from "react-native";
import FeaturedJobs from '../FeaturedJobs.json';
import PopularJobs from '../PopularJobs.json';
import { Feather } from '@expo/vector-icons';
import FeaturedJobCard from "./FeaturedJobCard";
import PopularJobCard from "./PopularJobCard"


const HomeScreen = ({route}) => {
  const {name, email } = route.params;


  const data = FeaturedJobs[0];
  const info = PopularJobs[0];

  const getLogoSource = (Company) => {
    switch (Company) {
      case 'Facebook':
        return require('../assets/facebook.png');
        case 'Google':
          return require('../assets/Google.png');

      default:
        return require('../assets/facebook.png')
    }
  };

  const getLogo1Source = (popularCompany) => {
    switch (popularCompany) {
      case 'Facebook':
        return require('../assets/facebook.png');
        case 'Google':
          return require('../assets/Google.png');
          case 'Beats':
            return require('../assets/Beats.png');
            case 'Burger King':
              return require('../assets/Burger.png')

      default:
        return require('../assets/facebook.png')
    }
  };


return (
  <SafeAreaView style={styles.screen}>
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      </View>
      <View>
      <Image
        source={require('../assets/profileIcon.png')}
        style={styles.image}
      />
      </View> 
    </View>

    <View style={styles.searchSection}>
          <View style={styles.search}>
          <Feather name="search" size={24} color="black" style={styles.icon} />
            <TextInput placeholder="Search for a job or position"></TextInput>
          </View>

          <View style={styles.filter}>
            <TouchableOpacity style={styles.button}>
              <Image source={require("../assets/filter.5.png")} />
            </TouchableOpacity>
          </View>
     </View>

   
    

    <View style={styles.jobContainer}>
      <View style={styles.jobHeader}>
        <Text style={styles.featuredJobsTitle}>Featured Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.jobButton}>See all</Text>
        </TouchableOpacity>
      </View>
    </View>

      
      <View style={styles.cardContainer}>
        <FlatList
         data={FeaturedJobs}
         renderItem={({item}) => (
          <FeaturedJobCard
           jobTitle={item.jobTitle}
           Company={item.Company}
           Salary={item.Salary} 
           backgroundColor={item.backgroundColor}
           Location={item.Location}
           logo={getLogoSource(item.Company)}
          />
         )}
         keyExtractor={item => item.id}
         contentContainerStyle={{gap: 10, paddingHorizontal: 12}}
         horizontal
         showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.jobContainer}>
      <View style={styles.jobHeader}>
        <Text style={styles.featuredJobsTitle}>Popular Jobs</Text>
        <TouchableOpacity style={styles.jobButton}>
          <Text style={styles.jobButton}>See all</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.popularJobs}>
        <FlatList 
        data={PopularJobs}
        contentContainerStyle={{gap: 10, paddingHorizontal: 12}}
        renderItem={({item}) => (
          <PopularJobCard
           popularLogo={getLogo1Source(item.popularCompany)}
           popularJobName={item.popularJobName}
           popularCompany={item.popularCompany}
           popularSalary={item.popularSalary}
           popularLocation={item.popularLocation}
           backgroundColor={item.backgroundColor}
          />
        )}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FAFAFD"
  },
  container: {
    marginTop: 45,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: 10,
    marginLeft: 10
  },
  icon: {
    marginRight: 10
  },
  textContainer: {
    flex: 1, 
    flexDirection: 'column', 
    marginLeft: 24,
  },
  userName: {
    fontWeight: '700',
    color: '#0D0D26',
    fontSize: 25,
    lineHeight: 36
  },
  image: {
    width: 55, 
    height: 55, 
    borderRadius: 25,
  },
  email: {
    fontWeight: '200',
    color: '#95969D',
    fontSize: 20,
    fontWeight: '400',
    height: '24'
  },
  searchSection:{
    flexDirection: 'row',
    paddingTop: 30,
    marginLeft: 10,
    flex: 1,
    width: '100%',
},
search:{
    flexDirection: 'row',
    backgroundColor: '#F2F2F3',
    borderRadius: 12,
    width: '75%',
    height: 48,
    alignItems: 'center',
    marginLeft: 10,
    paddingLeft: 10
},
filter: {
    width: 48,
    height: 48,
    backgroundColor: '#F2F2F3',
    borderRadius: 12,
    marginLeft: 10
},
button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
  cardContainer: {
    flex: 1, 
    marginTop: 15,
    borderRadius: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 40,
    height: 40,
    marginRight: 10
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
  },
   jobContainer: {
     marginTop: 45,
     padding: 10
   },
   jobHeader: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     marginLeft: 5
   },
   featuredLogo: {
    width: 40,
    height: 40,
    marginRight: 10
   },
   featuredJobsTitle: {
     fontSize: 20,
     fontWeight: 'bold' 
   },
   jobButton: {
     fontSize: 18, 
     color: '#808080', 
     marginLeft: 20
   },
   

});

export default HomeScreen;