import { IFrame } from "@/types/frame";
import axios from "axios";
export default {
  async calculate(history: Array<IFrame>, bowl: number) {
    const response = await axios.post(`http://localhost:3000/calculate`, {
      history: history,
      bowl: bowl,
    });
    return response.data;
  },
  async calculateFrame(frame: IFrame, bowl: number) {
    const response = await axios.post(`http://localhost:3000/calculate/frame`, {
      frame: frame,
      bowl: bowl,
    });
    return response.data;
  },
};
