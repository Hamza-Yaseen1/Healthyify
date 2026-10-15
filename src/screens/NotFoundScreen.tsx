import { View, Text } from "react-native";
import Button from "../components/ui/Button";

type NotFoundScreenProps = {
  onGoHome: () => void;
};

export default function NotFoundScreen({ onGoHome }: NotFoundScreenProps) {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text accessibilityRole="header" className="text-6xl font-bold text-primary">
        404
      </Text>
      <Text accessibilityRole="header" className="mt-4 text-2xl font-bold text-dark text-center">
        Page not found
      </Text>
      <Text className="mt-2 text-base text-grayText text-center">
        This page is not available yet.
      </Text>
      <Button
        title="Back to Home"
        variant="primary"
        className="mt-6"
        onPress={onGoHome}
      />
    </View>
  );
}
