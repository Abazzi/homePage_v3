import { DefaultLinkGroups, LinkBoardProps, SchoolLinkGroups } from "../../types";
import ListOfLinks from "../ListOfLinks/ListOfLinks";
import linkData from '../../links.json';
import './LinkBoard.css';
import LinkBoardHeader from "../LinkBoardHeader/LinkBoardHeader";

export default function LinkBoard({ props }: { props: LinkBoardProps }) {
  const SchoolLinks: SchoolLinkGroups = linkData.school;
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
  } else if (props.linkMode == "school") {
    return (
      <div className="link-board-container">
        <LinkBoardHeader props={{ linkMode: props.linkMode, setLinkMode: props.setLinkMode, theme: props.theme }} />
        <div className='link-board' data-theme={props.theme}>
          <ListOfLinks props={{ linkArray: SchoolLinks.daily, arrayName: 'daily' }} />
          <ListOfLinks props={{ linkArray: SchoolLinks.tools, arrayName: 'tools' }} />
          <ListOfLinks props={{ linkArray: SchoolLinks.docs, arrayName: 'docs' }} />
          <ListOfLinks props={{ linkArray: SchoolLinks.learning, arrayName: 'learning' }} />
        </div>
      </div>
    )
  }
}
