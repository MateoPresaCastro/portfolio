import reezy from "../../../public/reezy.jpg";
import el1 from "../../../public/eladio-hp.png";
import el2 from "../../../public/eladio beny redbull.jpeg";
import arena from "../../../public/arena.jpeg";
import beefjay from "../../../public/beefjay.png";
import cassow from "../../../public/cassow.jpeg";
import nikone from "../../../public/dia a day.jpeg";
import finesse from "../../../public/finesse.jpeg";
import kaidy from "../../../public/hasat el piso.jpeg";
import sticky from "../../../public/hentai sticky.jpeg";
import moses from "../../../public/joe mosees.jpeg";
import kyb from "../../../public/morad-beny-kyb.jpg";
import saniser from "../../../public/saniser.jpg";
import waves from "../../../public/waves.jpeg";
import type { StaticImageData } from "next/image";

interface ImageData {
  image: StaticImageData;
  song: string;
  album?: string;
  artist: string;
  year?: string;
}

const images: ImageData[] = [
  {
    image: el2,
    album: "SEN2 KBRN, VOL. 2",
    artist: "Eladio Carrion",
    song: "HP Freestyle",
    year: "2022",
  },
  {
    image: arena,
    artist: "Smart K",
    song: "Waves",
    year: "2022",
  },
  { image: el1, artist: "Eladio Carrion", song: "Red Bull", year: "2021" },
  {
    image: reezy,
    album: "WEISSWEIN & HEARTBREAKS",
    artist: "Reezy",
    song: "NO CAP",
    year: "2020",
  },
  {
    image: moses,
    artist: "Joe Moses",
    song: "We Different",
    album: "West Side II",
    year: "2020",
  },
  {
    image: kyb,
    artist: "Beny Jr ft Morad",
    song: "K y B",
    album: "30",
    year: "2020",
  },
  {
    image: cassow,
    artist: "Cassow",
    song: "BRAKE LIGHTS",
    year: "2020",
  },
  {
    image: arena,
    artist: "Smart K",
    song: "Arena",
    year: "2019",
  },
  {
    image: beefjay,
    artist: "Papi Trujillo ft Yung Beef",
    song: "Un Porno",
    album: "Beef Jay",
    year: "2019",
  },
  {
    image: finesse,
    artist: "Patrick Toussaint",
    song: "Finesse",
    year: "2019",
  },
  {
    image: kaidy,
    artist: "Kaidy Cain ft Dice Ailes",
    song: "Hasta el Piso",
    year: "2019",
  },
  {
    image: sticky,
    artist: "Sticky M.A.",
    song: "Hentai",
    year: "2019",
  },
  {
    image: saniser,
    artist: "Şanişer",
    song: "Dünyadan Alacaklarim Var",
    album: "LUDOVICO II",
    year: "2018",
  },
  {
    image: nikone,
    artist: "Nikone",
    song: "Dia a Day",
    album: "Patato",
    year: "2014",
  },
];

export default images;
