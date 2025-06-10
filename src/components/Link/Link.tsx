import { LinkProps } from "../../types";

export default function Link({ props }: { props: LinkProps }) {
  return (
    <a href={props.link} data-theme={props.theme} target='_blank'>{props.linkTitle}</a>
  )
}
