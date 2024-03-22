type HeadingProps = {
  children: string;
};
export const Heading = (props: HeadingProps) => {
  return (
    <div>
      <h3>{props.children}</h3>
    </div>
  );
};
