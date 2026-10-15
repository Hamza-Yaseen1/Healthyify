import { View, Text, ImageBackground } from "react-native";
import Button from "./ui/Button";

export default function CTA() {
  return (
    <ImageBackground
      source={require("../../assets/CTA-img.avif")}
      resizeMode="cover"
      className="w-full"
    >
      {/* Soft dark overlay */}
      <View className="bg-black/40 px-5 py-20 md:py-24">
        <View className="max-w-3xl mx-auto w-full items-center">
          {/* Small label */}
          <Text className="text-green-200 text-sm font-semibold tracking-[2px] uppercase mb-4">
            READY TO START?
          </Text>

          {/* Main Heading */}
          <Text className="text-xl md:text-5xl font-bold text-white text-center leading-relaxed">
            Transform Your Health,{"\n"}One Meal At A Time
          </Text>

          {/* Subtitle */}
          <Text className="mt-5 text-green-100 text-center text-base md:text-lg max-w-xl leading-relaxed">
            Fresh. Nutritious. Convenient. Join thousands of happy customers today.
          </Text>

          {/* Button */}
          <View className="mt-8">
            <Button
              title="Get Started Today →"
              variant="white"
              className="px-8 py-3.5"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}