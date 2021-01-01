import { IFrame } from "@/interfaces/frame.interface";
import axios from "axios";
export default {
  async calculate(history: Array<IFrame>) {
    const response = await axios.post(
      `http://localhost:3000/calculate/scoreBoard`,
      {
        history: history,
      }
    );
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
