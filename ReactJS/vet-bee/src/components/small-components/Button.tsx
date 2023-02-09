import { OrangeButtonStyle, WhiteButtonStyle } from "../pages/StyledComponents";

export const OrangeButton = (props: any) => {
  return (
    <OrangeButtonStyle type={props.type} onClick={props.onPress}>
      {props.text}
    </OrangeButtonStyle>
  );
};

export const WhiteButton = (props: any) => {
  return (
    <WhiteButtonStyle type={props.type} onClick={props.onPress}>
      {props.text}
    </WhiteButtonStyle>
  );
};
