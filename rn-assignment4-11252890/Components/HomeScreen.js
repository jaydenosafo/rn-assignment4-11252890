import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from "react-native";
import {useRouter, Stack} from 'expo-router';
import FeaturedJobs from '../FeaturedJobs.json';
import PopularJobs from '../PopularJobs.json';
import { Feather } from '@expo/vector-icons';


const HomeScreen = ({route}) => {
  const {name, email } = route.params;


  const info = FeaturedJobs[0];
  const data = PopularJobs[0];

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

    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
      <Feather name="search" size={24} color="black" />
        <TextInput 
         style={styles.searchInput}
         placeholder="Search a job or positon"
        />
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

    <View style={styles.featuredJobs}>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={FeaturedJobs}
        contentContainerStyle={{gap: 10, paddingHorizontal: 12}}
        renderItem={({item}) => (
          <TouchableOpacity style={[styles.cardContainer, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.cardContent}>
              <View style={styles.featuredLogo}>
              <Image source={{uri: item.logo}}
               resizeMode="contain"
               style={styles.logoImage}
              />
              </View>
              
              <View style={styles.textContainer}>
               <Text style={styles.jobTitle}>{item.jobTitle}</Text>
              <Text style={styles.company}>{item.Company}</Text>
              </View>
            </View>

            <View style={styles.cardFooter}>
              <Text style={styles.salary}>{item.Salary}</Text>
              <Text style={styles.location}>{item.Location}</Text>
            </View>
          </TouchableOpacity>
          
        )}
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
          <View style={[styles.FeaturedContainer, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.logoContainer}>
              <Image source={{uri: item.popularLogo}} style={styles.logo}/>
            </View>
            <View style={styles.jobInfo}>
             <Text style={styles.popularJobName}>{item.popularJobName}</Text>
             <Text style={styles.popularCompany}>{item.popularCompany}</Text>
            </View>
            <View style={styles.salaryLocation}>
             <Text style={styles.popularSalary}>{item.popularSalary}</Text>
             <Text style={styles.popularLocation}>{item.popularLocation}</Text>
            </View>
          </View>
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
   searchContainer: {
    width: '90%', 
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 10,
    marginLeft: 20,
    marginTop: 60
  },
  searchWrapper: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  searchInput: {
    flex: 1, 
    marginLeft: 10, 
    fontSize: 16,
    color: 'black',
  },
  cardContainer: {
    width: 300, 
    height:180,
    padding: 20,
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
     marginTop: 60,
     padding: 10
   },
   jobHeader: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     marginLeft: 20
   },
   featuredLogo: {
    backgroundColor: 'black',
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




  // cardContainer: {
  //   marginTop: 25,
  //   display: 'flex',
  //   flex: 1,
  //   flexDirection: 'column',
  //   borderRadius: 20,
  //   padding: 15,
  //   width: 335,
  //   height: 196
  // },
  // FeaturedContainer: {
  //   marginTop: 25,
  //   display: 'flex',
  //   flex: 1,
  //   flexDirection: 'column',
  //   borderRadius: 30,
  //   padding: 15,
  //   width: 327,
  //   height: 74
  // }
});

export default HomeScreen;