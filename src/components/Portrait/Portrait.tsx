import { PortraitProps } from "../../types";
import './Portrait.css';
import alucardPortrait from '../../img/portraits/alucard_portrait.webp';
import gaeasCradlePortrait from '../../img/portraits/gaeas_cradle.webp';
import hhkbGuyPortrait from '../../img/portraits/hhkbGuy.webp';
import solairePortrait from '../../img/portraits/solaire.gif';

export default function Portrait({ props }: { props: PortraitProps }) {

  if (props.theme == 'alucard') {
    return (
      <img src={alucardPortrait} className='portrait' data-theme={props.theme} />
    )
  } else if (props.theme == 'gaeas') {
    return (
      <img src={gaeasCradlePortrait} className='portrait' data-theme={props.theme} />
    )
  } else if (props.theme == 'hhkb') {
    return (
      <img src={hhkbGuyPortrait} className='portrait' data-theme={props.theme} />
    )
  } else {
    return (
      <img src={solairePortrait} className='portrait' data-theme={props.theme} />
    )
  }
}
