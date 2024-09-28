import ShadForm from "@/components/ShadForm";
import ZodForm from "../components/ZodForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "@/components/ui/toaster";

const Form = () => {
  return (
    <div>
      <ZodForm />
      <ToastContainer />
      <ShadForm />
      <Toaster />
    </div>
  );
};

export default Form;
