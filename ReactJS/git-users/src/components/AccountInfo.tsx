export const AccountInfo = (props: any) => {
  const { account } = props;

  return (
    <div>
      <p>{account.name}</p>
      <p>{account.birthdate.toLocaleString()}</p>
    </div>
  );
};
