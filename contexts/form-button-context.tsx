import { Mode } from "@components/forms/models/event-form";
import { ReactNode, createContext, useContext } from "react";

interface FormButtonContextProps {
  mode?: Mode;
  onClose: () => void;
}

interface FormButtonProviderProps extends FormButtonContextProps {
  children: ReactNode;
}

const FormButtonContext = createContext({} as FormButtonContextProps);

export const useFormButton = () => {
  return useContext(FormButtonContext);
};

export const FormButtonProvider = (props: FormButtonProviderProps) => {
  const { children, ...otherProps } = props;
  const value = otherProps;

  return (
    <FormButtonContext.Provider value={value}>
      {children}
    </FormButtonContext.Provider>
  );
};
