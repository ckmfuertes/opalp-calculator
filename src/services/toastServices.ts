import { toast } from "react-toastify";

export const showErrorToast = (message = "Something went wrong") => {
  toast.dismiss();
  toast(message, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    type: "error",
  });
};

export const showSuccessToast = (message = "Success!") => {
  toast.dismiss();
  toast(message, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    type: "success",
  });
};
