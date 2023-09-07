import * as FramerMotion from "framer-motion";
export * from "framer-motion";

const { createDomMotionComponent } = FramerMotion;

export const motion = {
  div: createDomMotionComponent("div"),
  ul: createDomMotionComponent("ul"),
  li: createDomMotionComponent("li"),
  svg: createDomMotionComponent("svg"),
};