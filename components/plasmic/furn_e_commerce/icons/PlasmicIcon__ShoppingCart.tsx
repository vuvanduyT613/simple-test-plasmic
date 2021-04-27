// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShoppingCartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShoppingCartIcon(props: ShoppingCartIconProps) {
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
          "M704 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zm896 0q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zm128-1088v512q0 24-16.5 42.5T1671 1024L627 1146q13 60 13 70 0 16-24 64h920q26 0 45 19t19 45-19 45-45 19H512q-26 0-45-19t-19-45q0-11 8-31.5t16-36 21.5-40T509 1207L332 384H128q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5T432 278t13 24.5 8 26 5.5 29.5 4.5 26h1201q26 0 45 19t19 45z"
        }
      ></path>
    </svg>
  );
}

export default ShoppingCartIcon;
/* prettier-ignore-end */
