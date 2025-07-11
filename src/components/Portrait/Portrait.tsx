import { PortraitProps } from "../../types";
import './Portrait.css';
import alucardPortrait from '../../assets/img/portraits/alucard_portrait.webp';
import gaeasCradlePortrait from '../../assets/img/portraits/gaeas_cradle.webp';
import solairePortrait from '../../assets/img/portraits/solaire.gif';
import hhkbGuy from '../../assets/img/portraits/hhkbGuy.webp';

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
      <img src={hhkbGuy} className='portrait' data-theme={props.theme} />
    )
  } else {
    return (
      <img src={solairePortrait} className='portrait' data-theme={props.theme} />
    )
  }
}
