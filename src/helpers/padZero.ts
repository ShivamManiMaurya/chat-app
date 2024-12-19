import { Some } from "./Some";

export default function padZero(number: number, length = 2) {
  return Some.String(number).padStart(length, "0");
}
