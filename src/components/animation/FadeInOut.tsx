import { animated, useSpring } from "@react-spring/web";

export const FadeInOut = ({
  isVisible,
  children,
}: {
  isVisible: boolean;
  children: React.ReactNode;
}) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(24px)",
    config: { tension: 220, friction: 120 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};
