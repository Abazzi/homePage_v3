import { LinkProps } from "../../types";

export default function Link({ props }: { props: LinkProps }) {
  return (
    <a href={props.url} target='_blank'>{props.name}</a>
  )
}
