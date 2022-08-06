import { useLocalStorage } from "@hooks/localstorage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const admin = process.env.NEXT_PUBLIC_SECRET;
const staff = process.env.NEXT_PUBLIC_STAFF_SECRET;

type Status = "authenticated" | "unauthenticated" | "loading";
type Role = "admin" | "staff";

interface AdminProviderProps {
  children: ReactNode;
}

interface AdminContextProps {
  secret: string;
  status: Status;
  role: Role | null;
  signIn: (pass: string) => void;
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
  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    switch (secret) {
      case staff:
        setStatus("authenticated");
        setRole("staff");
        break;

      case admin:
        setStatus("authenticated");
        setRole("admin");
        break;

      default:
        setStatus("unauthenticated");
        setRole(null);
        break;
    }
  }, [secret]);

  const signIn = (pass: string) => {
    setSecret(pass);
  };

  const signOut = () => {
    setSecret("");
  };

  const value = {
    role,
    secret,
    status,
    signIn,
    signOut,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
