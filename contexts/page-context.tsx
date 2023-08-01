import { Competition } from "@mongo/models/events/competition";
import { Performance } from "@mongo/models/events/performance";
import { Schedule } from "@mongo/models/events/schedule";
import { SchoolEvent } from "@mongo/models/events/schoolevent";
import { Section } from "@mongo/models/events/section";
import { WithId } from "mongodb";
import { createContext, ReactNode, useContext } from "react";

interface PageContextProps {
  schedules?: WithId<Schedule>[];
  competitions?: WithId<Competition>[];
  performances?: WithId<Performance>[];
  sections?: WithId<Section>[];
  schoolEvents?: WithId<SchoolEvent>[];
}

interface PageProviderProps extends PageContextProps {
  children: ReactNode;
}

const PageContext = createContext({} as PageContextProps);

export const usePage = () => {
  return useContext(PageContext);
};

export const PageProvider = (props: PageProviderProps) => {
  const { children, ...otherProps } = props;
  const value = otherProps;

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
