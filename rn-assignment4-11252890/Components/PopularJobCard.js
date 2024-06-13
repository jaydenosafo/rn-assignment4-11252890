import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item.logo}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.jobTitle}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item.Company}
          </Text>
          <Text style={styles.location}> {item.Location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 250,
    borderRadius: 10,
    justifyContent: "space-between",
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: 24,
    color: "#B3AEC6",
    marginTop: 26,
  },
  infoContainer: {
    marginTop: 10,
  },
  jobName: (selectedJob, item) => ({
    fontSize: 15,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob, item) => ({
    fontSize: 5,
  }),
  location: {
    fontSize: 10,
    color: "#B3AEC6",
  },
});


export default PopularJobCard;