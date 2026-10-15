import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const stats = [
  {
    icon: "restaurant-outline" as const,
    value: "1M+",
    label: "Meals Delivered",
  },
  {
    icon: "leaf-outline" as const,
    value: "30K+",
    label: "Happy Customers",
  },
  {
    icon: "star-outline" as const,
    value: "4.8/5",
    label: "Customer Satisfaction",
  },
  {
    icon: "people-outline" as const,
    value: "550+",
    label: "Corporate Clients",
  },
];

export default function Stats() {
  return (
    <View className="bg-surfaceAlt py-6 px-5 border-y border-gray-100">
      <View className="max-w-6xl mx-auto w-full flex-row flex-wrap justify-between items-center">
        {stats.map((item, index) => (
          <View
            key={item.label}
            className="flex-1 min-w-[140px] items-center justify-center py-3"
          >
            <View className="flex-row items-center gap-3">
              <Ionicons name={item.icon} size={40} color={colors.accent} />
              <View>
                <Text className="text-xl md:text-2xl font-bold text-accent">
                  {item.value}
                </Text>
                <Text className="text-xs md:text-sm text-muted mt-0.5">
                  {item.label}
                </Text>
              </View>
            </View>

            {/* Divider (except last item) */}
            {index < stats.length - 1 && (
              <View className="absolute right-0 h-10 w-px bg-gray-200 hidden md:flex" />
            )}
          </View>
        ))}
      </View>
    </View>
  );
}
