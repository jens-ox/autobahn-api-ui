import { RoadSelector, RoadSelectorProps } from "../roadSelector/roadSelector";
import { RoadExplorer, RoadExplorerProps } from "../roadExplorer/roadExplorer";

export type StepProps = RoadSelectorProps & RoadExplorerProps;

export const steps = [
  {
    label: "Fetching roads",
    description:
      "The road is the base resource for the Autobahn API. Select one to explore what we can leran about a road.",
    renderComponent: (props: RoadSelectorProps) => <RoadSelector {...props} />,
  },
  {
    label: "Road information",
    description:
      "There is lots of data available for a given road. Select the tabs below to explore.",
    renderComponent: (props: RoadExplorerProps) => <RoadExplorer {...props} />,
  },
];

export const getText = () => ({
  title: "Autobahn API Explorer",
  description: "The Autobahn API is provided by https://bund.dev/",
});
