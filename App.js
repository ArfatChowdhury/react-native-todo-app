import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerCon}>
       <TouchableOpacity>
       <Ionicons name="menu" size={32} color="black" />
       </TouchableOpacity>
        <TouchableOpacity>
        <Image
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1757517371699-3a2ce58688db?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }}
        style={{width:50, height:50, borderRadius:50}}
        />
        </TouchableOpacity>
      </View>
      <View>
      <Ionicons name="search" size={32} color="black" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: '10%',
    paddingHorizontal:10
  },
  headerCon:{
    flexDirection: 'row',
    justifyContent:'space-between'
    
  }
});
