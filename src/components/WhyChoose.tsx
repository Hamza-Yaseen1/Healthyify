import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const features = [
  {
    icon: "diamond-outline" as const,
    title: "Premium Quality",
    description: "High-quality, fresh ingredients",
  },
  {
    icon: "heart-outline" as const,
    title: "Health Focused",
    description: "Nutritionist designed meals",
  },
  {
    icon: "car-outline" as const,
    title: "Convenient Delivery",
    description: "To your home or office",
  },
  {
    icon: "leaf-outline" as const,
    title: "Flexible Plans",
    description: "Options for every dietary need",
  },
];

export default function WhyChoose() {
  return (
    <View className="bg-mist px-5 py-14">
      <View className="max-w-6xl mx-auto w-full flex-col lg:flex-row items-center gap-10 lg:gap-12">
        {/* Left Content */}
        <View className="lg:w-[34%] w-full">
          <Text className="text-muted text-[11px] tracking-[2px] mb-3">
            OUR ADVANTAGES
          </Text>

          <Text className="text-4xl font-bold text-ink leading-tight">
            Why Choose Healthify
          </Text>

          <Text className="mt-4 text-gray-800 text-sm leading-relaxed max-w-sm">
            More than just meals — we deliver a healthier, happier you with
            benefits that fit your lifestyle.
          </Text>

          <Pressable
            className="mt-6 self-start flex-row items-center gap-2 bg-olive rounded-full px-6 py-3.5 active:opacity-90"
            accessibilityRole="button"
            accessibilityLabel="Discover all advantages"
          >
            <Text className="text-white text-sm font-semibold">
              Discover All Advantages
            </Text>
            <Ionicons name="arrow-forward" size={16} color={colors.white} />
          </Pressable>
        </View>

        {/* Right Features */}
        <View className="flex-1 w-full flex-row flex-wrap justify-between gap-y-4">
          {features.map((item) => (
            <View
              key={item.title}
              className="w-[48%] lg:w-[23.5%] aspect-square bg-white/80 rounded-2xl px-4 py-5 items-center justify-center shadow-sm"
            >
              <Ionicons
                name={item.icon}
                size={40}
                color={colors.ink}
                style={{ marginBottom: 20 }}
              />

              <Text className="text-[15px] font-bold text-ink text-center mb-2">
                {item.title}
              </Text>

              <Text className="text-xs text-gray-500 text-center leading-snug">
                {item.description}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
