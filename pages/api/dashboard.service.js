import axios from "axios";

export const getMissionData = async () => {
  const response = await axios.get("https://www.ag-grid.com/example-assets/space-mission-data.json");
  return response.data.slice(0, 20);
};