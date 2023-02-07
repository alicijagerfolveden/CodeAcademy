import { Button } from "./Button/Button";
import { OneFotoBox } from "./OneFotoBox";
import { Title } from "./Title";

export const SecondPractise = () => {
  return (
    <div className="App">
      <Title
        title="Title"
        firstLine="Some about text"
        secondLine="in two lines"
        backgroundColor="cuteFoto"
        text={<Button text="Button" />}
      />
      <Title
        title="Portfolio"
        firstLine="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        secondLine="Illo consectetur esse atque sint ipsum eveniet, pariatur cupiditate deserunt, eius ex excepturi voluptate?"
        backgroundColor="section"
      />
      <div className="fotosBox">{OneFotoBox()}</div>
    </div>
  );
};
