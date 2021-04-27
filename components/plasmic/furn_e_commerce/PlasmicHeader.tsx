// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xoGoYnzcgCWsQgugY2n8Ua
// Component: -tzxWiNyeKkUv
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MenuButton from "../../MenuButton"; // plasmic-import: qloBj6vjVMacFh/component
import LinkButton from "../../LinkButton"; // plasmic-import: RxU6cI2gwxwvoQ/component
import IconLink from "../../IconLink"; // plasmic-import: ezfILrSMellodH/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: VcS_Pbeu58CkWY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: xoGoYnzcgCWsQgugY2n8Ua/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: -tzxWiNyeKkUv/css

import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: _M9_8k6fG1m6cR/icon
import CogIcon from "./icons/PlasmicIcon__Cog"; // plasmic-import: 9s5cT4zEs6HzX5/icon
import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: AgAq4EaYV1ji5E/icon

export type PlasmicHeader__VariantMembers = {
  expanded: "expanded";
};

export type PlasmicHeader__VariantsArgs = {
  expanded?: SingleBooleanChoiceArg<"expanded">;
};

type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>(
  "expanded"
);

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  menuButton?: p.Flex<typeof MenuButton>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<"img">;
};

export interface DefaultHeaderProps {
  expanded?: SingleBooleanChoiceArg<"expanded">;
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__expanded]: hasVariant(variants, "expanded", "expanded")
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__qMucO)}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
          <MenuButton
            data-plasmic-name={"menuButton"}
            data-plasmic-override={overrides.menuButton}
            className={classNames("__wab_instance", sty.menuButton, {
              [sty.menuButton__expanded]: hasVariant(
                variants,
                "expanded",
                "expanded"
              )
            })}
            expanded={
              hasVariant(variants, "expanded", "expanded") &&
              hasVariant(globalVariants, "screen", "mobile")
                ? ("expanded" as const)
                : undefined
            }
          />
        ) : null}

        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(defaultcss.all, sty.link)}
          component={Link}
          href={"/" as const}
          platform={"nextjs"}
        >
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img)}
            role={"img"}
            src={"/plasmic/furn_e_commerce/images/plasmic.png"}
          />
        </p.PlasmicLink>

        {(
          hasVariant(variants, "expanded", "expanded") &&
          hasVariant(globalVariants, "screen", "mobile")
            ? false
            : hasVariant(globalVariants, "screen", "mobile")
            ? false
            : true
        ) ? (
          <div
            className={classNames(defaultcss.all, sty.box__rVdYy, {
              [sty.box__expanded__rVdYyMqZW]: hasVariant(
                variants,
                "expanded",
                "expanded"
              )
            })}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__fotTq)}
              href={"/#home" as const}
              size={"small" as const}
              text={"Home"}
              type={"blankGray" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__hvqNb)}
              href={"/#new-arrival" as const}
              size={"small" as const}
              text={"New Arrival"}
              type={"blankGray" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__pCaQ)}
              href={"/#features" as const}
              size={"small" as const}
              text={"Features"}
              type={"blankGray" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__coZeG)}
              href={"/#blog" as const}
              size={"small" as const}
              text={"Blog"}
              type={"blankGray" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__hMuHz)}
              href={"/#contact" as const}
              size={"small" as const}
              text={"Contact"}
              type={"blankGray" as const}
            />
          </div>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__kqvp3)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__w5YW)}
            icon={
              <SearchIcon
                className={classNames(defaultcss.all, sty.svg__thIAw)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__aigyc)}
            icon={
              <CogIcon
                className={classNames(defaultcss.all, sty.svg__yjNoe)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__cbgRc)}
            icon={
              <ShoppingCartIcon
                className={classNames(defaultcss.all, sty.svg__iVs9G)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>

      {(
        hasVariant(variants, "expanded", "expanded") &&
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : false
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__lwYe, {
            [sty.box__expanded__lwYeMqZW]: hasVariant(
              variants,
              "expanded",
              "expanded"
            )
          })}
        >
          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__u9Gmb)}
            text={"Home"}
            type={"blankGray" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__qxqor)}
            text={"New Arrival"}
            type={"blankGray" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__eNs7)}
            text={"Features"}
            type={"blankGray" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__qR7)}
            text={"Blog"}
            type={"blankGray" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__lJwtA)}
            text={"Contact"}
            type={"blankGray" as const}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "link", "img"],
  menuButton: ["menuButton"],
  link: ["link", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  menuButton: typeof MenuButton;
  link: "a";
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHeader__VariantsArgs;
  args?: PlasmicHeader__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */