import { View, Text, Image } from "react-native";
import { testimonials } from "../data/testimonials";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

export default function Testimonials() {
  return (
    <View className="bg-white px-5 py-16">
      <View className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <View className="items-start mb-12">
          <Text className="text-primary font-semibold mb-2">
            CUSTOMER STORIES
          </Text>
          <Text className="text-3xl md:text-4xl font-bold text-dark text-start">
            What Our Customers Say
          </Text>
        </View>

        {/* Testimonials Grid */}
        <View className="flex-row flex-wrap justify-between gap-y-6">
          {testimonials.map((item) => (
            <View
              key={item.id}
              className="rounded-3xl p-6 w-full md:w-[48%] lg:w-[32%] border border-black"
            >
              {/* Stars */}
              <View className="flex-row gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Ionicons key={i} name="star" size={18} color={colors.star} />
                ))}
              </View>

              {/* Comment */}
              <Text className="text-dark text-base leading-relaxed mb-6">
                “{item.comment}”
              </Text>

              {/* User Info */}
              <View className="flex-row items-center gap-3 mt-3">
                <Image
                  source={{ uri: item.avatar }}
                  className="w-12 h-12 rounded-full"
                  accessibilityLabel={`Portrait of ${item.name}`}
                />
                <View>
                  <Text className="font-bold text-dark">{item.name}</Text>
                  <Text className="text-sm text-grayText">{item.role}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
