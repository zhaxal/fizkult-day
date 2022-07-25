import CompetitionForm from "@components/forms/CompetitionForm";
import { Competition } from "@mongo/models/events/competition";
import { fetcher } from "@utils/fetcher";
import { NextPage } from "next";
import useSWR from "swr";

const Events: NextPage = () => {
  const { data: competitions } = useSWR<Competition[]>(
    `/api/events/competitions`,
    fetcher
  );

  return (
    <div>
      <CompetitionForm />
    </div>
  );
};

export default Events;
