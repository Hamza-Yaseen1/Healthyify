import { useEffect, useRef, useState } from "react";
import { Animated, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "./ui/Button";
import { colors } from "../theme/colors";

const faqs = [
  {
    id: 1,
    question: "What are your meal plans?",
    answer:
      "We offer a variety of meal plans including Ready-to-Eat, Customized, Weight Management, and High-Protein options tailored to different lifestyles and goals.",
  },
  {
    id: 2,
    question: "How does delivery work?",
    answer:
      "Meals are freshly prepared and delivered to your door on your selected delivery days. You can choose convenient time slots that fit your schedule.",
  },
  {
    id: 3,
    question: "Can I customize my meals?",
    answer:
      "Yes! You can customize meals based on your dietary preferences, allergies, and fitness goals when selecting or managing your plan.",
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit/debit cards, Apple Pay, Google Pay, and other secure online payment methods.",
  },
  {
    id: 5,
    question: "Do you have a mobile app?",
    answer:
      "Yes, our mobile app is available on both iOS and Android so you can manage your meals, track deliveries, and update preferences easily.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [progress] = useState(() => new Animated.Value(0));
  const [contentHeight, setContentHeight] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const animation = Animated.timing(progress, {
      toValue: isOpen ? 1 : 0,
      duration: 220,
      useNativeDriver: false,
    });
    animation.start();
    return () => animation.stop();
  }, [isOpen, progress]);

  const height = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  });

  return (
    <View className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <Pressable
        onPress={onToggle}
        className="flex-row items-center justify-between px-5 py-4"
        accessibilityRole="button"
        accessibilityLabel={question}
        accessibilityState={{ expanded: isOpen }}
      >
        <Text className="flex-1 text-[15px] font-medium text-ink pr-4">
          {question}
        </Text>

        <View className="w-8 h-8 rounded-full bg-mist items-center justify-center">
          <Ionicons
            name={isOpen ? "remove" : "add"}
            size={18}
            color={colors.ink}
          />
        </View>
      </Pressable>

      <Animated.View style={{ height, overflow: "hidden" }}>
        <View
          className="absolute top-0 left-0 right-0 px-5 pb-5"
          onLayout={(event) => setContentHeight(event.nativeEvent.layout.height)}
        >
          <Text className="text-sm text-gray-500 leading-relaxed">{answer}</Text>
        </View>
      </Animated.View>
    </View>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <View className="bg-surfaceAlt px-5 py-16">
      <View className="max-w-6xl mx-auto w-full flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Content */}
        <View className="lg:w-[38%]">
          <Text className="text-muted text-xs tracking-[2px] font-medium mb-3">
            FREQUENTLY ASKED QUESTIONS
          </Text>

          <Text className="text-3xl md:text-4xl font-bold text-ink leading-tight">
            Have Questions?{"\n"}We’ve Got Answers.
          </Text>

          <Text className="mt-4 text-gray-600 text-[15px] leading-relaxed max-w-sm">
            Find quick answers to common questions about our meal plans, delivery, and more.
          </Text>

          <Button
            title="View All FAQs →"
            variant="primary"
            className="mt-8 self-start px-6"
          />
        </View>

        {/* Right Accordion */}
        <View className="flex-1 gap-3">
          {faqs.map((item) => (
            <AccordionItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
