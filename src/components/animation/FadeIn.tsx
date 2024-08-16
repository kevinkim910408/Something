import { animated, useSpring } from "@react-spring/web";

export const FadeIn = ({
  isVisible,
  children,
  className,
}: {
  isVisible: boolean;
  children: React.ReactNode;
  className?: string;
}) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
  });

  return (
    <animated.div style={styles} className={className}>
      {children}
    </animated.div>
  );
};
