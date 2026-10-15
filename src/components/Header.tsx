import { useState } from "react";
import { View, Text, Pressable, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "./ui/Button";
import { colors } from "../theme/colors";

export type NavigationTarget =
  | "home"
  | "about"
  | "meal-plans"
  | "testimonials"
  | "not-found";

type HeaderProps = {
  onNavigate: (target: NavigationTarget) => void;
};

const navLinks: { name: string; target: NavigationTarget }[] = [
  { name: "Home", target: "home" },
  { name: "About", target: "about" },
  { name: "Meal Plans", target: "meal-plans" },
  { name: "Testimonials", target: "testimonials" },
  { name: "Blog", target: "not-found" },
  { name: "Contact", target: "not-found" },
];

export default function Header({ onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const navigateTo = (target: NavigationTarget) => {
    setMenuOpen(false);
    onNavigate(target);
  };

  return (
    <View className="bg-white border-b border-gray-100">
      <View className="flex-row items-center justify-between px-5 py-4 max-w-6xl mx-auto w-full">
        <Pressable
          onPress={() => navigateTo("home")}
          accessibilityRole="link"
          accessibilityLabel="Healthyify home"
        >
          <Text className="text-2xl font-bold text-primary">Healthyify</Text>
        </Pressable>

        {!isMobile && (
          <View className="flex-row items-center gap-6">
            {navLinks.map((link) => (
              <Pressable
                key={link.name}
                onPress={() => navigateTo(link.target)}
                accessibilityRole="link"
                className="py-3"
              >
                <Text className="text-dark font-medium">{link.name}</Text>
              </Pressable>
            ))}
          </View>
        )}

        <View className="flex-row items-center gap-4">
          {!isMobile && (
            <Button
              title="Get Started"
              variant="primary"
              className="px-5 py-2.5"
              onPress={() => navigateTo("not-found")}
            />
          )}

          {isMobile && (
            <Pressable
              onPress={() => setMenuOpen((open) => !open)}
              className="p-2"
              accessibilityRole="button"
              accessibilityLabel={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              accessibilityState={{ expanded: menuOpen }}
            >
              <Ionicons
                name={menuOpen ? "close" : "menu"}
                size={28}
                color={colors.primary}
              />
            </Pressable>
          )}
        </View>
      </View>

      {isMobile && menuOpen && (
        <View className="bg-white px-5 pb-5 border-t border-gray-100">
          {navLinks.map((link) => (
            <Pressable
              key={link.name}
              className="py-3 border-b border-gray-50"
              onPress={() => navigateTo(link.target)}
              accessibilityRole="link"
            >
              <Text className="text-dark font-medium text-base">
                {link.name}
              </Text>
            </Pressable>
          ))}

          <Button
            title="Get Started"
            variant="primary"
            className="mt-4"
            onPress={() => navigateTo("not-found")}
          />
        </View>
      )}
    </View>
  );
}
