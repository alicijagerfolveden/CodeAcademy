import { gallery } from "./Gallery";

export const OneFotoBox = () => {
  return gallery.map((value, i) => {
    return (
      <div key={i} className="fotoBox">
        <img src={value.image} alt="foto" />
        <p>{value.description}</p>
      </div>
    );
  });
};
