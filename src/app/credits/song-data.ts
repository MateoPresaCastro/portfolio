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

interface SongData {
  image: StaticImageData;
  song: string;
  album?: string;
  artist: string;
  year?: string;
  id?: string;
}

const SONG_DATA: SongData[] = [
  {
    image: el1,
    album: "SEN2 KBRN, VOL. 2",
    artist: "Eladio Carrion",
    song: "HP Freestyle",
    year: "2022",
    id: "0ea9jt0vWPgR5Jm2P4q70z",
  },
  {
    image: waves,
    artist: "Smart K",
    song: "Waves",
    year: "2022",
    id: "5yLuU6OgfcvWM8cYTgDq07",
  },
  {
    image: el2,
    artist: "Eladio Carrion",
    song: "Red Bull",
    year: "2021",
    id: "0hnKRMSdo87O1dqkBQivFs",
  },
  {
    image: reezy,
    album: "WEISSWEIN & HEARTBREAKS",
    artist: "Reezy",
    song: "NO CAP",
    year: "2020",
    id: "2gyyx1wfcMO8TdZZxinstu",
  },
  {
    image: moses,
    artist: "Joe Moses",
    song: "We Different",
    album: "West Side II",
    year: "2020",
    id: "70vtPx7p06ghmvjvsw7w4P",
  },
  {
    image: kyb,
    artist: "Beny Jr ft Morad",
    song: "K y B",
    album: "30",
    year: "2022",
    id: "25xAFC9q7qlD45zAOhY88J",
  },
  {
    image: cassow,
    artist: "Cassow",
    song: "BRAKE LIGHTS",
    year: "2020",
    id: "26mWuVtpE3zMg0xceJz3zz",
  },
  {
    image: arena,
    artist: "Smart K",
    song: "Arena",
    year: "2019",
    id: "0Xt35kIoo1PLj1A3969gp1",
  },
  {
    image: beefjay,
    artist: "Papi Trujillo ft Yung Beef",
    song: "Un Porno",
    album: "Beef Jay",
    year: "2019",
    id: "5CAsxJrPfbOgFdY0rYPdsX",
  },
  {
    image: finesse,
    artist: "Patrick Toussaint",
    song: "Finesse",
    year: "2019",
    id: "5DPYrCpisAABT0ZfxM8IRz",
  },
  {
    image: kaidy,
    artist: "Kaidy Cain ft Dice Ailes",
    song: "Hasta el Piso",
    year: "2019",
    id: "2gsIJrZWuP0u8X1PpKH0jz",
  },
  {
    image: sticky,
    artist: "Sticky M.A.",
    song: "Hentai",
    year: "2019",
    id: "6zOOVm4S43oW4s8uNLwbrv",
  },
  {
    image: saniser,
    artist: "Şanişer",
    song: "Dünyadan Alacaklarim Var",
    album: "LUDOVICO II",
    year: "2018",
    id: "3alzMs9dw6XR4gIjbM9GmC",
  },
  {
    image: nikone,
    artist: "Nikone",
    song: "Dia a Day",
    album: "Patato",
    year: "2014",
    id: "3AY56ackWdR9z1teUbBiMP",
  },
];

export default SONG_DATA;
