// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
// import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import { Ionicons } from '@expo/vector-icons';

// export default function CustomDrawerContent(props) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = await AsyncStorage.getItem('authToken');
//       if (token) {
//         try {
//           const res = await axios.get('https://passport-wl8y.onrender.com/user/profile', {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           setUser(res.data);
//         } catch (err) {
//           console.error('Failed to fetch user:', err);
//         }
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const token = await AsyncStorage.getItem('authToken');
//       console.log('Token before logout:', token);

//       await AsyncStorage.removeItem('authToken');
//       Alert.alert('Logged out', 'You have been logged out successfully.');

//       props.navigation.replace('login'); 

//     } catch (error) {
//       console.error('Logout error:', error);
//       Alert.alert('Error', 'An error occurred while logging out.');
//     }
//   };

//   return (
//     <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
//       {/* Profile Header */}
//       <View style={styles.profile}>
//         <Image
//           source={{ uri: user?.profileImage || 'https://via.placeholder.com/80' }}
//           style={styles.profileImage}
//         />
//         <Text style={styles.profileName}>{user?.name || 'Loading...'}</Text>
//       </View>

//       <DrawerItemList {...props} />

//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//         <Ionicons name="log-out-outline" size={22} color="black" />
//         <Text style={styles.logoutText}>Logout</Text>
//       </TouchableOpacity>
//     </DrawerContentScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   profile: {
//     alignItems: 'center',
//     paddingVertical: 30,
//     backgroundColor: '#f1f5f9',
//     marginBottom: 10,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 50,
//     marginBottom: 8,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#1e293b',
//   },
//   logoutButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     paddingLeft: 20,
//     marginTop: 20,
//   },
//   logoutText: {
//     fontSize: 16,
//     marginLeft: 8,
//     color: 'black',
//   },
// });
