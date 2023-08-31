'use client';

const ErrorWrapper = ({error}: { error: Error }) => {
  return (
    <h1>
      something went wrong {error.message}
    </h1>
  );
};

export default Error;