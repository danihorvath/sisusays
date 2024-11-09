import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      {children}
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default ToastProvider;
