import { motion, MotionProps } from "framer-motion";
import { cloneElement, forwardRef, isValidElement } from "react";

interface FadeUpProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export const FadeUp = ({
  children,
  duration = 0.5,
  delay = 0,
}: FadeUpProps) => {
  if (!isValidElement(children)) {
    return null;
  }

  const ChildrenComponent = forwardRef((props, ref) => {
    return cloneElement(children, { ref });
  });

  const MotionChildren = motion(ChildrenComponent);

  return (
    <MotionChildren
      {...(children.props as MotionProps)}
      variants={{
        hidden: {
          opacity: 0,
          y: 15,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration, type: "spring", delay }}
    >
      {children}
    </MotionChildren>
  );
};
