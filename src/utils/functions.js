import * as FaIcons from "react-icons/fa";

/**
 *
 * @param {string} iconName
 * @returns
 */
export function ReactIcons(iconName) {
  if (typeof iconName !== "string") throw new Error("Argument must be string.");

  /**
   * similarly you can do for `Md icons`
   * you just have to add one if condition and instead of `Fa` replace the prefix of icon you want to add.
   */
  if (iconName.startsWith("Fa")) {
    return FaIcons[iconName];
  }
}
