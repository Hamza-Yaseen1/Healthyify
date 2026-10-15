import { Pressable, Text, type PressableProps } from "react-native";

type ButtonVariant = "primary" | "outline" | "secondary" | "white";

interface ButtonProps extends PressableProps {
  title: string;
  variant?: ButtonVariant;
  className?: string;
  textClassName?: string;
}

const baseStyle = "px-6 py-3.5 rounded-full items-center justify-center";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary active:bg-secondary",
  outline: "border-2 border-primary bg-transparent active:bg-lightGreen",
  secondary: "bg-lightGreen active:bg-green-100",
  white: "bg-white active:bg-gray-100",
};

const textVariants: Record<ButtonVariant, string> = {
  primary: "text-white font-semibold",
  outline: "text-primary font-semibold",
  secondary: "text-primary font-semibold",
  white: "text-primary font-semibold",
};

export default function Button({
  title,
  variant = "primary",
  className = "",
  textClassName = "",
  accessibilityRole = "button",
  ...props
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole={accessibilityRole}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <Text className={`${textVariants[variant]} ${textClassName}`}>
        {title}
      </Text>
    </Pressable>
  );
}
