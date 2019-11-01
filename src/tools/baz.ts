import get from "lodash/get";
export default function baz(): string {
  console.log("get:", get(undefined, "name", "defaultName"));
  return "baz";
}
