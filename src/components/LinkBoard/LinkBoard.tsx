import { DefaultLinkGroups, LinkBoardProps, ProgrammingLinkGroups } from "../../types";
import ListOfLinks from "../ListOfLinks/ListOfLinks";
import linkData from '../../assets/links.json';
import './LinkBoard.css';

export default function LinkBoard({ props }: { props: LinkBoardProps }) {
  const ProgrammingLinks: ProgrammingLinkGroups = linkData.programming;
  const DefaultLinks: DefaultLinkGroups = linkData.default;

  if (props.type == "default") {
    return (
      <div className='link-board'>
        <ListOfLinks props={{ linkArray: DefaultLinks.daily }} />
        <ListOfLinks props={{ linkArray: DefaultLinks.social }} />
        <ListOfLinks props={{ linkArray: DefaultLinks.media }} />
        <ListOfLinks props={{ linkArray: DefaultLinks.server }} />
      </div>
    )
  } else if (props.type == "programming") {
    return (
      <div className='link-board'>
        <ListOfLinks props={{ linkArray: ProgrammingLinks.daily }} />
        <ListOfLinks props={{ linkArray: ProgrammingLinks.tools }} />
        <ListOfLinks props={{ linkArray: ProgrammingLinks.docs }} />
        <ListOfLinks props={{ linkArray: ProgrammingLinks.inspo }} />
      </div>
    )

  }
}
