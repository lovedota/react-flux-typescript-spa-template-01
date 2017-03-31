import * as React from "react";

type Props = {
  isLoading: boolean,
  error: Error | null,
  pastDelay: null,
};

export default ({isLoading, error, pastDelay}: Props) => {
  if (isLoading) {
    return pastDelay ? <div>Loading...</div> : null; // Don"t flash "Loading..." when we don"t need to.
  } else if (error) {
    console.log(error);
    return <div>Error! Component failed to load</div>;
  } else {
    return null;
  }
};
