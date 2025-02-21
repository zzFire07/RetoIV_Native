import { View, Text } from "react-native";
import React from "react";
import CustomHeader from "./Header";
export function HomePage() {
    return (
        <View>
            <Text>Home</Text>
            <CustomHeader title="Club Ituzaingo" />
        </View>
    );
}