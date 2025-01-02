import { FC } from "react";

export interface Parr {
  json: { content: Array<{ content: Array<{ value: string }> }> };
}
export function buildParraph(value: Parr) {
  return value.json.content
    .map((p) => p.content.map((value) => value.value).join(""))
    .join("");
}

export const Parraph: FC<{
  value: Parr;
}> = ({ value }) => {
  return <p>{buildParraph(value)}</p>;
};
