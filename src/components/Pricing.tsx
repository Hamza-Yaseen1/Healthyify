import { useState, type ReactNode } from "react";
import { Animated, View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "./ui/Button";
import { colors } from "../theme/colors";
import { images } from "../data/images";

const pricingPlans = [
  {
    id: 1,
    name: "Essential Plan",
    price: "AED 299",
    period: "/ month",
    description: "Great for individuals starting their healthy journey.",
    icon: "leaf-outline" as const,
    features: ["Fresh daily meals", "Balanced nutrition", "Flexible delivery"],
    popular: false,
    buttonText: "Get Started",
  },
  {
    id: 2,
    name: "Balanced Plan",
    price: "AED 499",
    period: "/ month",
    description: "Our best value plan for a healthier lifestyle.",
    icon: "star" as const,
    features: [
      "Customized meal options",
      "Wide variety of meals",
      "Nutritionist support",
      "Flexible delivery",
    ],
    popular: true,
    buttonText: "Get Started",
  },
  {
    id: 3,
    name: "Performance Plan",
    price: "AED 699",
    period: "/ month",
    description: "For fitness enthusiasts and active lifestyles.",
    icon: "bar-chart-outline" as const,
    features: [
      "High-protein meals",
      "Performance-focused nutrition",
      "Personalized plans",
      "Priority support",
    ],
    popular: false,
    buttonText: "Get Started",
  },
];

function HoverCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [lift] = useState(() => new Animated.Value(0));

  const animate = (toValue: number) => {
    Animated.timing(lift, {
      toValue,
      duration: 180,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      className={`w-full sm:w-[48%] lg:w-[23.5%] ${className ?? ""}`}
      onHoverIn={() => animate(1)}
      onHoverOut={() => animate(0)}
      onPressIn={() => animate(1)}
      onPressOut={() => animate(0)}
    >
      <Animated.View
        className="h-full"
        style={{
          transform: [
            {
              translateY: lift.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -6],
              }),
            },
          ],
        }}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
}

function PricingPlanCard({ plan }: { plan: (typeof pricingPlans)[number] }) {
  return (
    <HoverCard>
      <View
        className={`h-full min-h-[400px] rounded-2xl border p-6 flex flex-col ${
          plan.popular
            ? "border-accent bg-white shadow-md"
            : "border-gray-100 bg-surface"
        }`}
      >
        {/* Most Popular Badge */}
        {plan.popular && (
          <View className="bg-accent self-stretch -mx-6 -mt-6 mb-5 px-4 py-2.5 rounded-t-2xl flex-row items-center justify-center gap-1.5">
            <Ionicons name="star" size={14} color={colors.white} />
            <Text className="text-white text-xs font-bold tracking-wide">
              MOST POPULAR
            </Text>
          </View>
        )}

        {/* Icon + Title */}
        <View className="flex-row items-center gap-2 mb-2">
          <Ionicons
            name={plan.icon}
            size={20}
            color={plan.popular ? colors.accent : colors.muted}
          />
          <Text className="text-lg font-bold text-ink">{plan.name}</Text>
        </View>

        <Text className="text-md text-gray-500 mb-4 leading-relaxed">
          {plan.description}
        </Text>

        {/* Price */}
        <Text className="text-2xl font-bold text-ink mb-5">
          {plan.price}
          <Text className="text-sm font-normal text-gray-500">
            {plan.period}
          </Text>
        </Text>

        {/* Features */}
        <View className="gap-2.5 mb-6 flex-1">
          {plan.features.map((feature) => (
            <View key={feature} className="flex-row items-center gap-2">
              <Ionicons name="checkmark" size={16} color={colors.accent} />
              <Text className="text-sm text-gray-700">{feature}</Text>
            </View>
          ))}
        </View>

        {/* Button always at bottom */}
        <Button
          title={plan.buttonText}
          variant={plan.popular ? "primary" : "outline"}
          className="w-full mt-auto"
        />
      </View>
    </HoverCard>
  );
}

export default function Pricing() {
  return (
    <View className="w-full bg-white px-5 py-16 sm:px-8">
      <View className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <View className="mb-12 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <View>
            <Text className="text-muted text-xs tracking-[2px] font-medium mb-2">
              GROWTH PLANS
            </Text>
            <Text className="text-3xl md:text-4xl font-bold text-ink">
              Find the Perfect Plan for You
            </Text>
          </View>

          <Pressable
            className="hidden md:flex flex-row items-center gap-1"
            accessibilityRole="link"
            accessibilityLabel="View all plans"
          >
            <Text className="text-ink text-sm font-medium">View All Plans</Text>
            <Ionicons name="arrow-forward" size={16} color={colors.ink} />
          </Pressable>
        </View>

        {/* Cards Grid */}
        <View className="flex-row flex-wrap justify-between gap-y-6">
          {pricingPlans.map((plan) => (
            <PricingPlanCard key={plan.id} plan={plan} />
          ))}

          {/* Promotional Card - Same height */}
          <HoverCard>
  <View className="h-full min-h-[400px] rounded-2xl overflow-hidden relative">
    <Image
      source={{ uri: images.greenSalad }}
      className="absolute inset-0 w-full h-full"
      resizeMode="cover"
      accessibilityLabel="Fresh healthy salad"
    />

    {/* Dark gradient overlay */}
    <View className="absolute inset-0 bg-black/40" />

    {/* Content */}
    <View className="absolute bottom-0 left-0 right-0 p-6 items-start">
      <Ionicons name="leaf-outline" size={48} color="#FFFFFF" />

      <Text className="text-white text-3xl font-bold mt-3 leading-snug">
        Invest in{"\n"}a Healthier{"\n"}You
      </Text>

      {/* Underline */}
      <View className="w-20 h-0.5 bg-white mt-3 rounded-full" />
    </View>
  </View>
</HoverCard>
        </View>
      </View>
    </View>
  );
}
