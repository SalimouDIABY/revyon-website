import logoIcon from "../../assets/843e9c78d08a71866a9c08af7a4a4eb843a53835.png";

export function Logo({ size = "md", color = "text" }: { size?: "sm" | "md" | "lg"; color?: "text" | "white" }) {
  const sizes = {
    sm: { height: "48px" },
    md: { height: "62px" },
    lg: { height: "78px" },
  };

  const filter = color === "white" ? "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" : "none";

  return (
    <img
      src={logoIcon}
      alt="Revyon Tech"
      style={{
        height: sizes[size].height,
        width: "auto",
        objectFit: "contain",
        filter: filter,
      }}
    />
  );
}
