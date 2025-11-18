type ErrorComponentProps = {
  error: string;
  fetchData?: () => void;
};

export const ErrorComponent = ({ error, fetchData }: ErrorComponentProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-100">
      <p className="text-text-danger text-base font-medium text-center">
        {error}
      </p>
      <button
        type="button"
        onClick={fetchData}
        className="px-4 py-2 rounded-md bg-background-brand text-text-neutral text-sm font-medium"
      >
        Try again
      </button>
    </div>
  );
};
