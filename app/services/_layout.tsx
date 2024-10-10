import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ServicesLayout() {
  const size = 25
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor:'blue',
      tabBarInactiveTintColor: 'black',
      headerShown:false
      }}>
      <Tabs.Screen name="index" options={{ 
          title: 'Home', 
          tabBarIcon: ({color}) => <FontAwesome name="home" size={size}  color={color} />  
        }}/>
      <Tabs.Screen name="gpa" options={{
        title: 'GPA',
        tabBarIcon: ({color}) => <FontAwesome name="calculator" size={size}  color={color} />  
        }}/>
      <Tabs.Screen name="chatBot" options={{ 
        title: 'Helper', 
        tabBarIcon: ({color}) => <FontAwesome name="question-circle" size={size}  color={color} />  
        }}/>
      <Tabs.Screen name="lostAndFound" options={{ 
        title: 'Missing',
        tabBarIcon: ({color}) => <FontAwesome name="comment" size={size}  color={color} />  
        }}/>
      <Tabs.Screen name="profile" options={{ 
        title: 'Profile',
        tabBarIcon: ({color}) => <FontAwesome name="user" size={size}  color={color}/>
        }}/>
    </Tabs>
  );
}
