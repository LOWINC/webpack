import {Bar} from "../constants/bar";

export function foo(params: {str: string}) {
  console.log(params.str, Bar.SUCCESS);
}
