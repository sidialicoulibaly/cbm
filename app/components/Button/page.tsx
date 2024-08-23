import React from "react";
import styles from "./Button.module.css"; // Import du CSS module

interface PropsBouton {
  label: string;
  onClick: () => void;
}

const Bouton: React.FC<PropsBouton> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Bouton;
