import { DefaultLinkGroups, LinkBoardProps, ProgrammingLinkGroups } from "../../types";
import ListOfLinks from "../ListOfLinks/ListOfLinks";
import linkData from '../../assets/links.json';
import './LinkBoard.css';
import LinkBoardHeader from "../LinkBoardHeader/LinkBoardHeader";

export default function LinkBoard({ props }: { props: LinkBoardProps }) {
  const ProgrammingLinks: ProgrammingLinkGroups = linkData.programming;
  const DefaultLinks: DefaultLinkGroups = linkData.default;

  if (props.linkMode == "default") {
    return (
      <div className="link-board-container">
        <LinkBoardHeader props={{ linkMode: props.linkMode, setLinkMode: props.setLinkMode, theme: props.theme }} />
        <div className='link-board' data-theme={props.theme}>
          <ListOfLinks props={{ linkArray: DefaultLinks.daily, arrayName: 'daily' }} />
          <ListOfLinks props={{ linkArray: DefaultLinks.social, arrayName: 'social' }} />
          <ListOfLinks props={{ linkArray: DefaultLinks.media, arrayName: 'media' }} />
          <ListOfLinks props={{ linkArray: DefaultLinks.server, arrayName: 'server' }} />
        </div>
      </div>
    )
  } else if (props.linkMode == "programming") {
    return (
      <div className="link-board-container">
        <LinkBoardHeader props={{ linkMode: props.linkMode, setLinkMode: props.setLinkMode, theme: props.theme }} />
        <div className='link-board' data-theme={props.theme}>
          <ListOfLinks props={{ linkArray: ProgrammingLinks.daily, arrayName: 'daily' }} />
          <ListOfLinks props={{ linkArray: ProgrammingLinks.tools, arrayName: 'tools' }} />
          <ListOfLinks props={{ linkArray: ProgrammingLinks.docs, arrayName: 'docs' }} />
          <ListOfLinks props={{ linkArray: ProgrammingLinks.inspo, arrayName: 'inspo' }} />
        </div>
      </div>
    )
  }
}
