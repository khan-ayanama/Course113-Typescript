type HeroListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const Hero = (props: HeroListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <li>
          {name.first} {name.last}
        </li>
      ))}
    </div>
  );
};
