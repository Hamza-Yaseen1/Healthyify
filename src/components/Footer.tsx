import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const footerLinks = {
  Company: ["About Us", "Our Chefs", "Careers", "Blog"],
  Support: ["Help Center", "Contact Us", "FAQs", "Delivery Info"],
  Legal: ["Privacy Policy", "Terms of Service", "Refund Policy"],
};

const socialLinks = [
  { icon: "logo-instagram" as const, label: "Instagram" },
  { icon: "logo-facebook" as const, label: "Facebook" },
  { icon: "logo-twitter" as const, label: "Twitter" },
  { icon: "logo-linkedin" as const, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <View className="bg-dark px-5 pt-14 pb-8">
      <View className="max-w-6xl mx-auto w-full">
        {/* Top Section */}
        <View className="flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <View className="md:w-1/3">
            <Text className="text-2xl font-bold text-white mb-3">
              Healthyify
            </Text>
            <Text className="text-gray-400 text-sm leading-relaxed mb-5">
              Fresh, nutritious, chef-prepared meals delivered to your door. Making healthy eating simple and delicious.
            </Text>

            {/* Social Icons */}
            <View className="flex-row gap-4">
              {socialLinks.map((social) => (
                <Pressable
                  key={social.icon}
                  className="bg-gray-800 w-10 h-10 rounded-full items-center justify-center"
                  accessibilityRole="link"
                  accessibilityLabel={`Healthyify on ${social.label}`}
                >
                  <Ionicons name={social.icon} size={18} color={colors.white} />
                </Pressable>
              ))}
            </View>
          </View>

          {/* Links */}
          <View className="flex-row flex-wrap gap-10 md:gap-16">
            {Object.entries(footerLinks).map(([title, links]) => (
              <View key={title}>
                <Text className="text-white font-semibold mb-4">{title}</Text>
                {links.map((link) => (
                  <Pressable
                    key={link}
                    className="mb-2.5"
                    accessibilityRole="link"
                    accessibilityLabel={link}
                  >
                    <Text className="text-gray-400 text-sm">{link}</Text>
                  </Pressable>
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* Divider */}
        <View className="h-px bg-gray-700 mb-6" />

        {/* Bottom */}
        <View className="flex-col md:flex-row justify-between items-center gap-3">
          <Text className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Healthyify. All rights reserved.
          </Text>
          <Text className="text-gray-500 text-sm">
            Privacy Policy | Terms of Service
          </Text>
        </View>
      </View>
    </View>
  );
}
