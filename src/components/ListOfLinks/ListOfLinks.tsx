import { ListOfLinksProps } from '../../types';
import Link from '../Link/Link';
import './ListOfLinks.css';

export default function ListOfLinks({ props }: { props: ListOfLinksProps }) {
  return (
    <ul className='list-of-links'>
      {props.linkArray.map((link) => {
        return <Link key={crypto.randomUUID()} props={{ name: link.name, url: link.url }} />
      })}
    </ul>
  )
}
