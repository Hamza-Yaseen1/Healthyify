import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const steps = [
  {
    number: "1",
    icon: "person-outline" as const,
    title: "Choose Your Plan",
    description: "Select the meal plan that fits your goals.",
  },
  {
    number: "2",
    icon: "nutrition-outline" as const,
    title: "We Prepare Fresh Meals",
    description: "Our chefs prepare nutritious meals with care.",
  },
  {
    number: "3",
    icon: "car-outline" as const,
    title: "Enjoy Convenient Delivery",
    description: "Receive your meals and enjoy a healthier you.",
  },
];

export default function HowItWorks() {
  return (
    <View className="bg-mist px-5 py-16">
      <View className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <View className="flex-row items-end justify-between mb-12">
          <View className="flex-1">
            <Text className="text-muted text-xs tracking-[2px] font-medium mb-2">
              HOW IT WORKS
            </Text>
            <Text className="text-3xl md:text-4xl font-bold text-ink leading-tight">
              Healthy Eating in 3 Simple Steps
            </Text>
          </View>

          <Pressable
            className="hidden md:flex flex-row items-center gap-2 mb-10 rounded-md bg-sand px-6 py-3.5 active:opacity-90"
            accessibilityRole="button"
            accessibilityLabel="It's easy to get started"
          >
            <Text className="text-ink text-base font-medium">
              It’s Easy to Get Started
            </Text>
            <Ionicons name="arrow-forward" size={16} color={colors.ink} />
          </Pressable>
        </View>

        {/* Steps */}
        <View className="flex-col lg:flex-row lg:items-center justify-between gap-6">
          {steps.map((step, index) => (
            <View
              key={step.number}
              className="flex-col lg:flex-row lg:items-center gap-6 lg:gap-4 lg:flex-1"
            >
              {/* Step Content */}
              <View className="flex-row items-center gap-5">
                {/* Number Circle */}
                <View className="w-14 h-14 rounded-full bg-sand items-center justify-center mt-1">
                  <Text className="text-3xl font-bold text-ink">
                    {step.number}
                  </Text>
                </View>

                {/* Icon */}
                <Ionicons name={step.icon} size={32} color={colors.ink} />

                {/* Text */}
                <View className="flex-1 max-w-[200px]">
                  <Text className="text-lg font-bold text-ink mb-1">
                    {step.title}
                  </Text>
                  <Text className="text-base font-semibold text-gray-500 leading-snug">
                    {step.description}
                  </Text>
                </View>
              </View>

              {/* Arrow between steps (desktop only) */}
              {index < steps.length - 1 && (
                <View className="hidden lg:flex items-center justify-center px-2">
                  <Ionicons name="arrow-forward" size={24} color={colors.ink} />
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
