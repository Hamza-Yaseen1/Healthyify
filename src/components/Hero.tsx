import { View, Text, Image } from "react-native";
import Button from "./ui/Button";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { images } from "../data/images";

const trustIndicators = [
  { icon: "restaurant-outline" as const, label: "100% Fresh Ingredients" },
  { icon: "color-wand-outline" as const, label: "Chef Prepared" },
  { icon: "car-outline" as const, label: "Free Delivery" },
];

export default function Hero() {
  return (
    <View className="bg-white px-4 py-10 sm:px-5 md:py-16">
      <View className="max-w-6xl mx-auto w-full flex-col md:flex-row items-center gap-8 md:gap-10">
        {/* Left Content */}
        <View className="w-full md:flex-1">
          <Text className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight">
            Healthy Meals{"\n"}
            <Text className="text-primary">Happier Lives</Text>
          </Text>

          <Text className="mt-5 text-base md:text-lg text-grayText leading-relaxed max-w-lg">
            Fresh, nutritious, conveniently delivered to you. We make healthy eating simple and sustainable with chef-prepared meals designed for your lifestyle.
          </Text>

          {/* Buttons */}
          <View className="flex-row flex-wrap gap-3 sm:gap-4 mt-8">
            <Button title="Explore Meal Plans" variant="primary" />
            <Button title="Learn More" variant="outline" />
          </View>

          {/* Trust indicators */}
          <View className="flex-row flex-wrap gap-6 mt-10">
            {trustIndicators.map((item) => (
              <View key={item.label} className="flex-row items-center gap-2">
                <Ionicons name={item.icon} size={20} color={colors.primary} />
                <Text className="text-sm text-ink">{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Right Image */}
        <View className="w-full md:flex-1 relative items-center">
          <Image
            source={{ uri: images.healthyBowl }}
            className="w-full h-64 sm:h-72 md:h-96 rounded-3xl"
            resizeMode="cover"
            accessibilityLabel="A bowl of fresh, healthy food"
          />

          {/* Floating rating card */}
          <View className="absolute bottom-4 left-4 bg-white rounded-2xl p-4 shadow-lg flex-row items-center gap-3">
            <View className="bg-lightGreen p-2 rounded-full">
              <Ionicons name="star" size={20} color={colors.primary} />
            </View>
            <View>
              <Text className="font-bold text-ink">4.9/5 Rating</Text>
              <Text className="text-xs text-grayText">From 2,500+ reviews</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
