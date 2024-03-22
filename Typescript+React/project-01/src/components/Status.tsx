type StatusProps = {
  status: "loading" | "success" | "error";
};
export const Status = (props: StatusProps) => {
  let message;
  if (props.status == "loading") {
    message = "Loading...";
  } else if (props.status == "success") {
    message = "Data fetched Succesfully";
  } else if (props.status == "error") {
    message = "Error fetching Data";
  }
  return (
    <div>
      <h2>Staus:- {message}</h2>
    </div>
  );
};
