import type { PropsWithChildren, ReactElement } from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import { useBottomTabOverflow } from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import Card from "./ui/card";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage?: ReactElement;
  title?: string;
  headerBackgroundColor?: { dark: string; light: string };
}>;

export default function ParallaxScrollView({ children, title }: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedView style={styles.container}>
          <Text>{title}</Text>
          <Animated.ScrollView
            keyboardShouldPersistTaps="handled"
            ref={scrollRef}
            scrollEventThrottle={100}
            scrollIndicatorInsets={{ bottom }}
            contentContainerStyle={{ paddingBottom: bottom }}
          >
            <ThemedView style={styles.content}>{children}</ThemedView>
          </Animated.ScrollView>
        </ThemedView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 10,
    gap: 16,
    overflow: "hidden",
  },
});
