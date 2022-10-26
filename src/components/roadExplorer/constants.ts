import { autobahnApiClient } from "../../apis/autobahn/client";

export const roadResources = [
  {
    label: "Roadworks",
    componentProps: {
      getList: async (roadId: string) => {
        const response = await autobahnApiClient.listRoadworks({
          roadId,
        });
        return response.roadworks;
      },
      getDetail: async (roadworkId: string) => {
        return await autobahnApiClient.getRoadwork({ roadworkId });
      },
    },
  },
  {
    label: "Webcams",
    componentProps: {
      getList: async (roadId: string) => {
        const response = await autobahnApiClient.listWebcams({
          roadId,
        });
        return response.webcam;
      },
      getDetail: async (webcamId: string) => {
        return await autobahnApiClient.getWebcam({ webcamId });
      },
    },
  },
  {
    label: "Parking Lorries",
    componentProps: {
      getList: async (roadId: string) => {
        const response = await autobahnApiClient.listParkingLorries({
          roadId,
        });
        return response.parkingLorry;
      },
      getDetail: async (lorryId: string) => {
        return await autobahnApiClient.getParkingLorry({ lorryId });
      },
    },
  },
  {
    label: "Warnings",
    componentProps: {
      getList: async (roadId: string) => {
        const response = await autobahnApiClient.listWarnings({
          roadId,
        });
        return response.warning;
      },
      getDetail: async (warningId: string) => {
        return await autobahnApiClient.getWarning({ warningId });
      },
    },
  },
  {
    label: "Closures",
    componentProps: {
      getList: async (roadId: string) => {
        const response = await autobahnApiClient.listClosures({
          roadId,
        });
        return response.closure;
      },
      getDetail: async (closureId: string) => {
        return await autobahnApiClient.getClosure({ closureId });
      },
    },
  },
  {
    label: "Charing Stations",
    componentProps: {
      getList: async (roadId: string) => {
        const response = await autobahnApiClient.listChargingStations({
          roadId,
        });
        return response.electricChargingStation;
      },
      getDetail: async (stationId: string) => {
        return await autobahnApiClient.getChargingStation({ stationId });
      },
    },
  },
];
