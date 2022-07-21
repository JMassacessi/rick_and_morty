import React from "react";
import Animales from "../Animales/Animales";
import styles from "./Zoo.module.css";

export default function Bienvenido() {
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
  });

  const handleInputChange = (e) => {
    setZoo({ ...zoo, zooName: e.target.value });
  };

  React.useEffect(() => {
    fetch("http://localhost:3001/animals")
      .then((res) => res.json())
      .then((data) => setZoo({ ...zoo, animals: data }))
      .catch((error) => console.log(error));
  }, [zoo]);

  return (
    <div>
      <h1 className={styles.title}>Mi Zoo!</h1>
      <label style={{ textAlign: "center" }}>Nombre de zoo:</label>
      <input value={zoo.zooName} onChange={handleInputChange}></input>
      <h3 className={styles.subtitle}>{zoo.zooName}</h3>
      <ul className={styles.unorderedList}>
        {zoo.animals?.map((animal, key) => (
          <li className={styles.listItem} key={key}>
            {animal.specie}
          </li>
        ))}
      </ul>
      <Animales animals={zoo.animals} />
    </div>
  );
}
