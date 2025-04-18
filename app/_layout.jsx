import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useProtectedRoute() {
  const [isNavigationReady, setNavigationReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Listen to navigation readiness
    const unsubscribe = router?.addListener('state', (event) => {
      console.log("INFO: Router is ready:", event);
      setNavigationReady(true);
    });

    // Cleanup listener on unmount
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [router]);

  useEffect(() => {
    // Only check authentication once the navigation is ready
    if (!isNavigationReady) {
      return;
    }

    // Check authentication status
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        console.log("Token found:", token);

        if (token) {
          router.replace('/home'); // Navigate to home page if token exists
        } else {
          router.replace('/index'); // Navigate to login (index) if no token
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkAuthStatus();
  }, [isNavigationReady, router]);
}



//sabse pahle layout read hota hai, then index
//layout means hame hamare routes kasie navigate karna hai
//stack se animation aata hai upar
