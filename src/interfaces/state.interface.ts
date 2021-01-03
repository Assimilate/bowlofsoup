import { IFrame } from "@/interfaces/frame.interface";
export interface IState {
  scoreBoard: Array<IFrame>;
  gameFinished: Boolean;
  amountOfPinsLeft: Number;
  currentFrameIndex: Number;
}
