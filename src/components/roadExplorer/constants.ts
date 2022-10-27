import { autobahnApiClient } from "../../apis/autobahn/client";

export const roadResources = [
  {
    label: "Roadworks",
    componentProps: {
      listDisplayUrl: "/{roadId}/services/roadworks",
      itemDisplayUrl: "/details/roadworks/{roadworkId}",
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
      listDisplayUrl: "/{roadId}/services/webcam",
      itemDisplayUrl: "/details/webcam/{webcamId}",
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
      listDisplayUrl: "/{roadId}/services/parking_lorry",
      itemDisplayUrl: "/details/parking_lorry/{lorryId}",
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
      listDisplayUrl: "/{roadId}/services/warning",
      itemDisplayUrl: "/details/warning/{warningId}",
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
      listDisplayUrl: "/{roadId}/services/closure",
      itemDisplayUrl: "/details/closure/{closureId}",
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
      listDisplayUrl: "/{roadId}/services/electric_charging_station",
      itemDisplayUrl: "/details/electric_charging_station/{stationId}",
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
