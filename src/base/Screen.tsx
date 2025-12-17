import { useEffect } from "react";
import { resetKeyboardEvents } from "../helpers/resetKeyboardEvents";

interface ScreenProps {
  title?: string;
  description?: string;
  visitLink: string;
  codeLink?: string;
}

const Screen = ({ title, description, visitLink, codeLink }: ScreenProps) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "v" || e.key === "V") {
        window.open(visitLink, "_blank");
        resetKeyboardEvents();
      } else if (e.key === "g" || e.key === "G") {
        window.open(codeLink, "_blank");
        resetKeyboardEvents();
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [visitLink, codeLink]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      <p
        style={{
          display: "flex",
          width: "100%",
          justifyContent: codeLink ? "space-between" : "center",
        }}
      >
        <span>Visit (Press V)</span>
        {codeLink && <span>Github (Press G)</span>}
      </p>
      <span>Move out of Plate to Exit</span>
    </div>
  );
};

export default Screen;
