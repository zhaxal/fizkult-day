import { Spinner, Stack } from "@chakra-ui/react";
import { useAdmin } from "@contexts/admin-context";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { status } = useAdmin();
  const router = useRouter();

  switch (status) {
    case "loading":
      return (
        <Stack justifyContent="center" alignItems="center">
          <Spinner />
        </Stack>
      );
    case "authenticated":
      return <>{children}</>;

    case "unauthenticated":
      router.push("/");

      return (
        <Stack justifyContent="center" alignItems="center">
          <Spinner />
        </Stack>
      );
  }
};

export default ProtectedRoute;
