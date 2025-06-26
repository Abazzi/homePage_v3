import { LinkBoardHeaderProps } from "../../types";
import './LinkBoardHeader.css';

export default function LinkBoardHeader({ props }: { props: LinkBoardHeaderProps }) {

  if (props.linkMode == 'default') {
    return (
      <div className="link-board-header" data-theme={props.theme}>
        <span>[homepage@default]<span className='blinking'> _ </span></span>
        <button id='switch-links-button' onClick={() => {
          props.setLinkMode('programming');
        }} />
      </div>
    );
  } else if (props.linkMode == 'programming') {
    return (
      <div className="link-board-header" data-theme={props.theme}>
        <span>[homepage@programming]<span className='blinking'> _ </span></span>
        <button id='switch-links-button' onClick={() => {
          props.setLinkMode('default');
        }} />
      </div>
    );
  }
}
