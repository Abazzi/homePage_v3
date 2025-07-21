import { ComicStrip } from "../../types";

export default function ComicReader() {

  async function fetchComic(rssURL: string): Promise<Array<ComicStrip>> {
    const parser = new DOMParser();
    const comicStripArray = new Array<ComicStrip>();
    const rssResponse = await fetch(rssURL);
    const textResponse = await rssResponse.text();
    const dataHunk = new window.DOMParser().parseFromString(
      textResponse,
      'text/xml'
    );
    const items = dataHunk.querySelectorAll('item');
    items.forEach((item) => {
      const stripData = item.querySelector('description')?.innerHTML.toString();
      const imgRegex = /<img[^>]*?src\s*=\s*[""']?([^'"" >]+?)[ '""][^>]*?>/g;
      const comicStrip = stripData?.match(imgRegex);
      if (comicStrip) {
        const dummy = parser.parseFromString(`${comicStrip}`, 'text/html');
        const temp: ComicStrip = {
          seriesName: dummy.getElementsByTagName('img')[0].alt,
          stripURL: dummy.getElementsByTagName('img')[0].src,
        };
        comicStripArray.push(temp);
      }
    });
    return comicStripArray;
  }

  return (
    <div id='comic-reader'>
      <div id="comic-title-div">
        <h1 id="comic-strips-header" data-mode="bonfire">Daily Comics Strips (ESC to Close)</h1>
      </div>
      <select className="comics-dropdown comic-strips-dropdown" defaultValue='https://www.comicsrss.com/rss/nancy-classics.rss'>
        <option className="comic-strip-option" value="https://www.comicsrss.com/rss/nancy-classics.rss">Nancy (Classic)</option>
        <option className="comic-strip-option" value="https://www.comicsrss.com/rss/nancy.rss">Nancy (Modern)</option>
        <option className="comic-strip-option" value="https://www.comicsrss.com/rss/peanuts.rss">Peanuts</option>
        <option className="comic-strip-option" value="https://www.comicsrss.com/rss/peanuts-begins.rss">Peanuts Begins</option>
        <option className="comic-strip-option" value="https://www.comicsrss.com/rss/zippy-the-pinhead.rss">Zippy</option>
        <option className="comic-strip-option" value="https://www.comicsrss.com/rss/calvinandhobbes.rss">Calvin &amp; Hobbs</option>
        <option className="comic-strip-option" value="https://www.comicsrss.com/rss/boondocks.rss">The Boondocks</option>
      </select>
      <div id="comic-strips-div">
      </div>
    </div>
  );
}
