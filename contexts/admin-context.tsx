import { useLocalStorage } from "@hooks/localstorage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const key = process.env.NEXT_PUBLIC_SECRET;

type Status = "authenticated" | "unauthenticated" | "loading";

interface AdminProviderProps {
  children: ReactNode;
}

interface AdminContextProps {
  secret: string;
  status: Status;
  signIn: (pass: string) => boolean;
  signOut: () => void;
}

const AdminContext = createContext({
  secret: "",
  status: "loading",
} as AdminContextProps);

export const useAdmin = () => {
  return useContext(AdminContext);
};

export const AdminProvider = ({ children }: AdminProviderProps) => {
  const [secret, setSecret] = useLocalStorage("secret", "");
  const [status, setStatus] = useState<Status>("loading");



  useEffect(() => {
    if (secret === key) {
      setStatus("authenticated");
    } else {
      setStatus("unauthenticated");
    }
  }, [secret]);

  const signIn = (pass: string) => {
    setSecret(pass);
    return key === pass;
  };

  const signOut = () => {
    setSecret("");
  };

  const value = {
    secret,
    status,
    signIn,
    signOut,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
