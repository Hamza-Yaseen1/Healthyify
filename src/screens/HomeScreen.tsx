import { useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import Header, { type NavigationTarget } from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import MealPlans from "../components/MealPlans";
import WhyChoose from "../components/WhyChoose";
import Pricing from "../components/Pricing";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import NotFoundScreen from "./NotFoundScreen";

export default function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null);
  const sectionOffsets = useRef<Partial<Record<NavigationTarget, number>>>({});
  const [showNotFound, setShowNotFound] = useState(false);

  const navigateTo = (target: NavigationTarget) => {
    if (target === "not-found") {
      setShowNotFound(true);
      return;
    }

    setShowNotFound(false);
    scrollViewRef.current?.scrollTo({
      y: sectionOffsets.current[target] ?? 0,
      animated: true,
    });
  };

  if (showNotFound) {
    return <NotFoundScreen onGoHome={() => navigateTo("home")} />;
  }

  return (
    <ScrollView
      ref={scrollViewRef}
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
    >
      <Header onNavigate={navigateTo} />
      <Hero />
      <Stats />
      <View
        onLayout={(event) => {
          sectionOffsets.current.about = event.nativeEvent.layout.y;
        }}
      >
        <About />
      </View>
      <View
        onLayout={(event) => {
          sectionOffsets.current["meal-plans"] = event.nativeEvent.layout.y;
        }}
      >
        <MealPlans />
      </View>
      <WhyChoose />
      <Pricing />
      <HowItWorks />
      <View
        onLayout={(event) => {
          sectionOffsets.current.testimonials = event.nativeEvent.layout.y;
        }}
      >
        <Testimonials />
      </View>
      <FAQ />
      <CTA />
      <Footer />
    </ScrollView>
  );
}