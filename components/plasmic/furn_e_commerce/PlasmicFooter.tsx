// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xoGoYnzcgCWsQgugY2n8Ua
// Component: _lt7Piwzx9NEs
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
import IconLink from "../../IconLink"; // plasmic-import: ezfILrSMellodH/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: VcS_Pbeu58CkWY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: xoGoYnzcgCWsQgugY2n8Ua/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: _lt7Piwzx9NEs/css

import LocationArrowIcon from "./icons/PlasmicIcon__LocationArrow"; // plasmic-import: VOC4cuWnQ0jsW6/icon
import FacebookIcon from "./icons/PlasmicIcon__Facebook"; // plasmic-import: 664uGAjy8lO_2r/icon
import InstagramIcon from "./icons/PlasmicIcon__Instagram"; // plasmic-import: nD1ed2FABdV7YE/icon
import LinkedinIcon from "./icons/PlasmicIcon__Linkedin"; // plasmic-import: luOjyXGFbtPsP_/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
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
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box___60Vu2)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__o0Id0)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__fy1OZ
            )}
          >
            {"Information"}
          </div>

          <div className={classNames(defaultcss.all, sty.box__ksp2Z)}>
            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___8S59Z
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"About Us"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___1F7VP
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Contact Us"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__dWxbr
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"News"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__ytg3M
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Store"}
            </p.PlasmicLink>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__yJMtF)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__omwSb
            )}
          >
            {"Collections"}
          </div>

          <div className={classNames(defaultcss.all, sty.box___7SHxw)}>
            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___0NHrE
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Wooden Chair"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__l0IzI
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Royal Cloth Sofa"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__hPeRs
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Accent Chair"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__uLkBy
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Bed"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__trIc6
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Hanging Lamp"}
            </p.PlasmicLink>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__h0Ecn)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__ih0Q9
            )}
          >
            {"My Accounts"}
          </div>

          <div className={classNames(defaultcss.all, sty.box__ptFtY)}>
            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___007Je
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"My Account"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__jyU0I
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Wishlist"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___3LkQ
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Community"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__wz6U
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Order History"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__dxZ32
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"My Cart"}
            </p.PlasmicLink>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__dMxth)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__zc7Rq
            )}
          >
            {"Newsletter"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__wPrA2
            )}
          >
            {"Subscribe to get latest news, updates, and information"}
          </div>

          <div className={classNames(defaultcss.all, sty.box__u2Ahw)}>
            <input
              data-plasmic-name={"textbox"}
              data-plasmic-override={overrides.textbox}
              className={classNames(defaultcss.input, sty.textbox)}
              placeholder={"Enter Email Here..." as const}
              size={1 as const}
              type={"text" as const}
              value={"" as const}
            />

            <IconLink
              className={classNames("__wab_instance", sty.iconLink__z2Bj9)}
              icon={
                <LocationArrowIcon
                  className={classNames(defaultcss.all, sty.svg__hqz5X)}
                  role={"img"}
                />
              }
            />
          </div>
        </p.Stack>
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.box__gfZs3)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__ai50L)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__sq2WB)}
            icon={
              <FacebookIcon
                className={classNames(defaultcss.all, sty.svg__joDs7)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__rtZvm)}
            icon={
              <InstagramIcon
                className={classNames(defaultcss.all, sty.svg__bI6F)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__ymRyD)}
            icon={
              <LinkedinIcon
                className={classNames(defaultcss.all, sty.svg__hspSp)}
                role={"img"}
              />
            }
          />
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={hasVariant(globalVariants, "screen", "mobile") ? true : false}
          className={classNames(defaultcss.all, sty.box__mjkEt)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___7Faz
            )}
          >
            {"?? Copyright. "}
          </div>

          <p.PlasmicLink
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__g5G3W
            )}
            component={Link}
            href={"https://www.plasmic.app/" as const}
            platform={"nextjs"}
          >
            {"Made by Plasmic. "}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__cOnan
            )}
            component={Link}
            href={"https://www.themesine.com/" as const}
            platform={"nextjs"}
          >
            {"Inspired by Themesine."}
          </p.PlasmicLink>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox"],
  textbox: ["textbox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicFooter__VariantsArgs;
  args?: PlasmicFooter__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
