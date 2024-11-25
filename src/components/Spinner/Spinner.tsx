import { SpinnerProps } from './Spinner.types';

const Spinner = ({ children, ...props }: SpinnerProps) => {
  return <div {...props}>{children}</div>;
};

export default Spinner;
