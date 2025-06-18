import { LinkProps } from "../../types";

export default function Link({ props }: { props: LinkProps }) {
  return (
    <li><a href={props.url} target='_blank'>{props.name}</a></li>
  )
}
