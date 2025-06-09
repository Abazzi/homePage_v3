import { PortraitProps } from "../../types";
import './Portrait.css';
import alucardPortrait from '../../assets/img/alucard_portrait.webp';
import entPortrait from '../../assets/img/ent.webp';
import solairePortrait from '../../assets/img/solaire.gif';

export default function Portrait({ props }: { props: PortraitProps }) {

  if (props.theme == 'alucard') {
    return (
      <img src={alucardPortrait} className='portrait' />
    )
  } else if (props.theme == 'ent') {
    return (
      <img src={entPortrait} className='portrait' />
    )
  } else {
    return (
      <img src={solairePortrait} className='portrait' />
    )
  }
}
