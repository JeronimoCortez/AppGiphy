import { CardGif } from "../ui/CardGif/CardGif";
import { useAppSelector } from "../../hooks/redux";

export const GifList = () => {
  const gift = useAppSelector((state) => state.gift.gift);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, .6fr)",
        gap: "2vh",
      }}
    >
      {gift.map((el, index) => (
        <CardGif gift={el} key={index} />
      ))}
    </div>
  );
};
