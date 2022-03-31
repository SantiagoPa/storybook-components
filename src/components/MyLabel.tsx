import "./mylabel.css";

export interface MyLableProps {
  /**
   * MyLabel content
   */
  label: string;

  /**
   * how large show the MyLabel be?
   */
  size: "normal" | "h1" | "h2" | "h3";

  /**
   * want to capitalize the text
   */
  allCaps?: boolean;

  /**
   * label color type
   */
  color?: "primary" | "secundary" | "tertiary";

  /**
   * Custom Color chose
   */
  customColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  customColor
}: MyLableProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{
        color: customColor && customColor
    }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
