import { LinkBoardHeaderProps } from "../../types";
import './LinkBoardHeader.css';

export default function LinkBoardHeader({ props }: { props: LinkBoardHeaderProps }) {

  return (
    <div className="link-board-header" data-theme={props.theme}>
      <span>[root@{props.linkMode}]<span className='blinking'> _ </span></span>
      <select name="link-mode" id="link-mode-select" defaultValue='default' onChange={e => props.setLinkMode(e.target.value)}>
        <option value='default'>Default</option>
        <option value='school'>School</option>
      </select>
    </div>
  );
}
