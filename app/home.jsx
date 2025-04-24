// import React, { useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   const handleLogout = async () => {
//     try {
//       // Check if the token exists before removing it
//       const token = await AsyncStorage.getItem('authToken');
//       console.log('Token before logout:', token);
  
//       await AsyncStorage.removeItem('authToken');
//       Alert.alert('Logged out', 'You have been logged out successfully.');
  
//       // Navigate to login screen
//       navigation.replace('login'); // Ensure 'login' screen exists in your navigation
  
//     } catch (error) {
//       console.error('Logout error:', error);
//       Alert.alert('Error', 'An error occurred while logging out.');
//     }
//   };
  

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome</Text>
      
//       <TouchableOpacity
//         style={{
//           backgroundColor: '#ff4d00',
//           padding: 10,
//           marginTop: 20,
//           borderRadius: 5,
//         }}
//         onPress={handleLogout}
//       >
//         <Text style={{ color: '#fff' }}>Logout</Text>
//       </TouchableOpacity>
//           <View style={styles.loginButton}>
//         <TouchableOpacity onPress={() => navigation.navigate('profile')}>
//           <Text style={styles.loginText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
// loginButton: {
//   backgroundColor: '#ff4d00',
//   borderRadius: 25,
//   paddingVertical: 15,
//   paddingHorizontal: 40,
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 4 },
//   shadowOpacity: 0.3,
//   shadowRadius: 5,
//   elevation: 5,
//   marginBottom: 20,
// },
// loginText: {
//   color: '#000',
//   fontSize: 20,
//   fontWeight: '500',
//   letterSpacing: 2,
// }})

// export default HomeScreen;

// import React from 'react';
// import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

// const stories = [
//   { id: '1', title: 'Thirsty Crow', image: require('../assets/images/my.jpg'), duration: '1 min' },
//   { id: '2', title: 'Fox and the crow', image: require('../assets/images/my.jpg'), duration: '2 min' },
// ];

// export default function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <TextInput style={styles.search} placeholder="Search for your story" />
//       <Text style={styles.title}>What would you like to listen today?</Text>
//       <FlatList
//         data={stories}
//         horizontal
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Processing')}>
//             <Image source={item.image} style={styles.image} />
//             <Text>{item.title}</Text>
//             <Text>{item.duration}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//       <Text style={styles.category}>Categories</Text>
//       {/* Render categories similarly */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 16, backgroundColor: '#fff', flex: 1 },
//   search: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
//   title: { fontSize: 18, marginVertical: 12 },
//   card: { marginRight: 12 },
//   image: { width: 100, height: 100, borderRadius: 10 },
//   category: { marginTop: 24, fontSize: 16, fontWeight: 'bold' },
// });


import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={33} color="black" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TextInput placeholder="Search for your story" style={styles.input} />
          <FontAwesome name="camera" size={20} color="black" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <Ionicons name="person-circle-outline" size={32} color="black" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>What would you like to listen today?</Text>

      {/* Story Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storyRow}>
        <View style={styles.storyCard}>
          <Image source={require('../assets/images/crow.png')} style={styles.image} />
          <Text style={styles.cardTitle}>Thirsty Crow</Text>
          <Text style={styles.cardSub}>1 min</Text>
        </View>
        <View style={styles.storyCard}>
          <Image source={require('../assets/images/fox.png')} style={styles.image} />
          <Text style={styles.cardTitle}>Fox and the crow</Text>
          <Text style={styles.cardSub}>2 min</Text>
        </View>
        <View style={styles.storyCard}>
          <Image source={require('../assets/images/crow.png')} style={styles.image} />
          <Text style={styles.cardTitle}>Thirsty Crow</Text>
          <Text style={styles.cardSub}>1 min</Text>
        </View>
        <View style={styles.storyCard}>
          <Image source={require('../assets/images/crow.png')} style={styles.image} />
          <Text style={styles.cardTitle}>Fox and the crow</Text>
          <Text style={styles.cardSub}>1 min</Text>
        </View>
      </ScrollView>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoryBox}>
        <Image source={require('../assets/images/adventure.png')} style={styles.icon} />
        <Text style={styles.categoryText}>Adventure</Text>
      </View>
      <View style={styles.categoryBox}>
        <Image source={require('../assets/images/adventure.png')} style={styles.icon} />
        <Text style={styles.categoryText}>Bed Time</Text>
      </View>
      <View style={styles.categoryBox}>
        <Image source={require('../assets/images/adventure.png')} style={styles.icon} />
        <Text style={styles.categoryText}>Fantasy</Text>
      </View>
      <View style={styles.categoryBox}>
        <Image source={require('../assets/images/adventure.png')} style={styles.icon} />
        <Text style={styles.categoryText}>Adventure</Text>
      </View>

      
      <Text style={styles.sectionTitle}>Recently Listened</Text>
      <View style={styles.categoryBox}>
        <Image source={require('../assets/images/adventure.png')} style={styles.icon} />
        <Text style={styles.categoryText}>Kite and a Monkey</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8fc',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2e0249',
    marginBottom: 16,
  },
  storyRow: {
    marginBottom: 24,
  },
  storyCard: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
    elevation: 3,
    paddingBottom: 8,
  },
  image: {
    width: '100%',
    height: 110,
  },
  cardTitle: {
    textAlign: 'center',
    marginTop: 6,
    fontSize: 14,
    fontWeight: '600',
    color:"46557B"
  },
  cardSub: {
    textAlign: 'center',
    fontSize: 12,
    color: '#46557B',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: '#46557B',
  },
  categoryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#46557B',
  },
});
