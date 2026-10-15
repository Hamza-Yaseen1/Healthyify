import { View, Text, Image } from "react-native";
import Button from "./ui/Button";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { images } from "../data/images";

const features = [
  { icon: "restaurant-outline" as const, label: "Freshly Prepared Daily" },
  { icon: "nutrition-outline" as const, label: "Balanced Nutrition" },
  { icon: "happy-outline" as const, label: "Great Taste" },
];

export default function About() {
  return (
    <View className="bg-white px-4 py-12 sm:px-5 sm:py-16">
      <View className="max-w-6xl mx-auto w-full flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left Images */}
        <View className="w-full md:flex-1 relative mb-4 md:mb-0">
          <Image
            source={{ uri: images.healthyBowl }}
            className="w-full h-64 sm:h-80 md:h-[380px] rounded-3xl"
            resizeMode="cover"
            accessibilityLabel="A colorful, healthy meal"
          />

          {/* Small overlapping image */}
          <Image
            source={{ uri: images.kitchenPrep }}
            className="absolute -bottom-4 left-3 sm:left-4 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl border-4 border-white shadow-md"
            resizeMode="cover"
            accessibilityLabel="Fresh ingredients being prepared"
          />

          {/* Floating card */}
          <View className="absolute bottom-3 right-3 sm:bottom-6 sm:right-4 bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-lg flex-row items-center gap-2.5">
            <View className="bg-lightGreen p-2 rounded-full">
              <Ionicons name="leaf" size={18} color={colors.accent} />
            </View>
            <View>
              <Text className="text-sm font-semibold text-ink">Nourishing</Text>
              <Text className="text-xs text-gray-500">Lives Daily</Text>
            </View>
          </View>
        </View>

        {/* Right Content */}
        <View className="w-full md:flex-1">
          <Text className="text-accent font-extrabold text-base tracking-wide mb-2">
            ABOUT HEALTHYIFY
          </Text>

          <Text className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight">
            Your Trusted Healthy Food Partner
          </Text>

          <Text className="mt-5 text-[15px] text-gray-600 leading-relaxed font-semibold">
            At Healthyify, we believe healthy eating should be convenient,
            affordable, and enjoyable. Based in Dubai, we prepare fresh,
            balanced meals using high-quality ingredients to help individuals
            and families achieve their health goals without sacrificing taste.
          </Text>

          {/* Features */}
          <View className="flex-row flex-wrap gap-6 mt-8">
            {features.map((feature) => (
              <View key={feature.label} className="flex-row items-center gap-2">
                <Ionicons name={feature.icon} size={20} color={colors.accent} />
                <Text className="text-sm text-gray-700 font-medium">
                  {feature.label}
                </Text>
              </View>
            ))}
          </View>

          <Button
            title="More About Us →"
            variant="primary"
            className="mt-8 self-start px-6 py-3.5 rounded-lg sm:mb-3"
          />
        </View>
      </View>
    </View>
  );
}
