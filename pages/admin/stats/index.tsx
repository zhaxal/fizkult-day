import ProtectedRoute from "@components/ui/ProtectedRoute";
import { NextPage } from "next";

const Stats: NextPage = () => {
  return (
    <ProtectedRoute>
      <div>Stats</div>
    </ProtectedRoute>
  );
};

export default Stats;
