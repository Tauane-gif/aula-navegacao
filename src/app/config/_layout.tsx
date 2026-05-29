import { Tabs } from "expo-router";
import { View, Text} from "react-native";

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index"
                options={{
                    title: "Aplicativos", 
                    headerShown: false
                }}
            />
            <Tabs.Screen name="bluetooth"
                options={{
                    title: "Bluetooth", 
                    headerShown: false
                }}
            />
        </Tabs>
    ); 
}