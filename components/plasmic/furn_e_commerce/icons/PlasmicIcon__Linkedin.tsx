// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkedinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkedinIcon(props: LinkedinIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1792 1792"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M477 625v991H147V625h330zm21-306q1 73-50.5 122T312 490h-2q-82 0-132-49t-50-122q0-74 51.5-122.5T314 148t133 48.5T498 319zm1166 729v568h-329v-530q0-105-40.5-164.5T1168 862q-63 0-105.5 34.5T999 982q-11 30-11 81v553H659q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5T1285 602q171 0 275 113.5t104 332.5z"
        }
      ></path>
    </svg>
  );
}

export default LinkedinIcon;
/* prettier-ignore-end */
