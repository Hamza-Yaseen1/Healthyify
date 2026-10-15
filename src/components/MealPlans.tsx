import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { images } from "../data/images";

const mealPlans = [
  {
    id: 1,
    title: "Healthy Ready-To-Eat Meals",
    description: "Fresh, balanced meals prepared daily and ready to enjoy.",
    image: images.greenSalad,
  },
  {
    id: 2,
    title: "Customized Meal Plans",
    description: "Personalized nutrition plans designed for your goals.",
    image: images.healthyBowl,
  },
  {
    id: 3,
    title: "Weight Management Plans",
    description: "Delicious meals to support your weight loss.",
    image: images.weightLoss,
  },
  {
    id: 4,
    title: "High-Protein Meal Plans",
    description: "Nutrient-rich meals for active lifestyles and fitness goals.",
    image: images.highProtein,
  },
];

export default function MealPlans() {
  return (
    <View className="bg-surface px-4 py-12 sm:px-5 sm:py-16">
      <View className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <View className="flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <View className="w-full sm:flex-1">
            <Text className="text-accent font-semibold text-sm tracking-wide mb-2">
              OUR SERVICES
            </Text>
            <Text className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink">
              Healthy Meal Plans for Every Lifestyle
            </Text>
          </View>

          <Pressable
            className="hidden md:flex flex-row items-center gap-1"
            accessibilityRole="link"
            accessibilityLabel="View all services"
          >
            <Text className="text-accent font-medium text-sm">
              View All Services
            </Text>
            <Ionicons name="arrow-forward" size={16} color={colors.accent} />
          </Pressable>
        </View>

        {/* Cards */}
        <View className="flex-row flex-wrap justify-between gap-y-5 sm:gap-y-6">
          {mealPlans.map((plan) => (
            <View
              key={plan.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm w-full sm:w-[48%] lg:w-[24%]"
            >
              <Image
                source={{ uri: plan.image }}
                className="w-full h-48 sm:h-52"
                resizeMode="cover"
                accessibilityLabel={plan.title}
              />

              <View className="p-4 sm:p-5 relative min-h-[140px]">
                <Text className="text-base font-bold text-ink mb-2">
                  {plan.title}
                </Text>
                <Text className="text-base text-gray-500 leading-relaxed mb-8">
                  {plan.description}
                </Text>

                {/* Circular Arrow Button */}
                <Pressable
                  className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-lightGreen items-center justify-center"
                  accessibilityRole="button"
                  accessibilityLabel={`Learn more about ${plan.title}`}
                >
                  <Ionicons name="arrow-forward" size={16} color={colors.accent} />
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
