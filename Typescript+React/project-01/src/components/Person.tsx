type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      <p>
        {props.name.first} {props.name.last}
      </p>
    </div>
  );
};
