import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */
type onFocusC = (something: boolean) => void;
const addListener = (onFocusChange: onFocusC):void => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
