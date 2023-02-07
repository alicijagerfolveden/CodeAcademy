export const Title = (props: any) => {
  return (
    <div className={props.backgroundColor}>
      <h1>{props.title}</h1>
      <p>{props.firstLine}</p>
      <p>{props.secondLine}</p>
      {props.text}
    </div>
  );
};
