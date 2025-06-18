import { ListOfLinksProps } from '../../types';
import Link from '../Link/Link';

export default function ListOfLinks({ props }: { props: ListOfLinksProps }) {
  return (
    <div className="list-of-links">
      <ul>
        {props.linkArray.map((link) => {
          return <Link key={crypto.randomUUID()} props={{ name: link.name, url: link.url }} />
        })}
      </ul>
    </div>
  )
}
