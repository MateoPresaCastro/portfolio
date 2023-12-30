import reezy from "../public/reezy.jpg";
import hp from "../public/hp.png";
import redBull from "../public/redbull.jpeg";
import arena from "../public/arena.jpeg";
import beefJay from "../public/beefjay.png";
import breakLights from "../public/break-lights.jpeg";
import diaADay from "../public/dia-a-day.jpeg";
import finesse from "../public/finesse.jpeg";
import hastaElPiso from "../public/hasta-el-piso.jpeg";
import sticky from "../public/sticky.jpeg";
import weDifferent from "../public/joe-moses.jpeg";
import kyb from "../public/kyb.jpg";
import saniser from "../public/saniser.jpg";
import waves from "../public/waves.jpeg";
import type { StaticImageData } from "next/image";

interface SongData {
  image: StaticImageData;
  song: string;
  album?: string;
  artist: string;
  year: string;
  youtubeLink: string;
  producedBy: string;
  id: number;
}

const SONG_DATA: SongData[] = [
  {
    image: hp,
    album: "SEN2 KBRN, VOL. 2",
    artist: "Eladio Carrion",
    song: "HP Freestyle",
    year: "2022",
    youtubeLink: "https://youtu.be/p7hSLy6G9UE?si=2OqySLGY3RonyV2P",
    producedBy: "Mateo Presa and Steve Lean",
    id: 1,
  },
  {
    image: waves,
    artist: "Smart K",
    song: "Waves",
    year: "2022",
    youtubeLink: "https://youtu.be/5RQ9ly7zFYQ?si=yrgSlGZGwIeORe0s",
    producedBy: "Mateo Presa",
    id: 2,
  },
  {
    image: redBull,
    artist: "Eladio Carrion ft Beny Jr",
    song: "Red Bull",
    year: "2021",
    youtubeLink: "https://youtu.be/lA0INn4zNlk?si=PU6V4DcT5D_uE-rU",
    producedBy: "Mateo Presa, SHB and Steve Lean",
    id: 3,
  },
  {
    image: reezy,
    album: "WEISSWEIN & HEARTBREAKS",
    artist: "Reezy",
    song: "NO CAP",
    year: "2020",
    youtubeLink: "https://youtu.be/X6Qo2UgK3kA?si=xFqDeesyqvwpPQce&t=101",
    producedBy: "Mateo Presa and J. Atori",
    id: 4,
  },
  {
    image: weDifferent,
    artist: "Joe Moses",
    song: "We Different",
    album: "West Side II",
    year: "2020",
    youtubeLink: "https://youtu.be/UKFCXU5JY64?si=rDpP8XSHni5ZBU1Y",
    producedBy: "Mateo Presa and KanielTheOne",
    id: 5,
  },
  {
    image: kyb,
    artist: "Beny Jr ft Morad",
    song: "K y B",
    album: "30",
    year: "2022",
    youtubeLink: "https://youtu.be/lJ_ViAV1uLk?si=MunP0-pPEgvYnUJV",
    producedBy: "Mateo Presa and SHB",
    id: 6,
  },
  {
    image: breakLights,
    artist: "Cassow",
    song: "BRAKE LIGHTS",
    year: "2020",
    youtubeLink: "https://youtu.be/iFxQzGm1Kwg?si=lEUNl8U48lUJOnGN",
    producedBy: "Mateo Presa and LIA",
    id: 7,
  },
  {
    image: arena,
    artist: "Smart K",
    song: "Arena",
    year: "2019",
    youtubeLink: "https://youtu.be/R06X7xrE4B8?si=KsbwaJCbcjGZF4fq",
    producedBy: "Mateo Presa and LIA",
    id: 8,
  },
  {
    image: beefJay,
    artist: "Papi Trujillo ft Yung Beef",
    song: "Un Porno",
    album: "Beef Jay",
    year: "2019",
    youtubeLink: "https://youtu.be/m-cdWs-DqHI?si=IG4g-gGTH5M9zoFS",
    producedBy: "Mateo Presa and Steve Lean",
    id: 9,
  },
  {
    image: finesse,
    artist: "Patrick Toussaint",
    song: "Finesse",
    year: "2019",
    youtubeLink: "https://youtu.be/ZuDRJg7rI88?si=S2qDZnIKCBH_2P0-",
    producedBy: "Mateo Presa and Phonix Beats",
    id: 10,
  },
  {
    image: hastaElPiso,
    artist: "Kaidy Cain ft Dice Ailes",
    song: "Hasta el Piso",
    year: "2019",
    youtubeLink: "https://youtu.be/MUG2XPSIVyc?si=lth3wSqWecW8nAi0",
    producedBy: "Mateo Presa and Steve Lean",
    id: 11,
  },
  {
    image: sticky,
    artist: "Sticky M.A.",
    song: "Hentai",
    year: "2019",
    youtubeLink: "https://youtu.be/27nGVJjHPfU?si=RfOsjw66TdJNFnf6",
    producedBy: "Mateo Presa and IAMTOMMY",
    id: 12,
  },
  {
    image: saniser,
    artist: "Şanişer",
    song: "Dünyadan Alacaklarim Var",
    album: "LUDOVICO II",
    year: "2018",
    youtubeLink: "https://youtu.be/giDp5s3qqNc?si=9x8GRpBF_Fw-P6EQ",
    producedBy: "Mateo Presa and Şanişer",
    id: 13,
  },
  {
    image: diaADay,
    artist: "Nikone",
    song: "Dia a Day",
    album: "Patato",
    year: "2014",
    youtubeLink: "https://youtu.be/ElajKwdTafo?si=D-AX6Z5OazKNh0EC",
    producedBy: "Mateo Presa",
    id: 14,
  },
];

export default SONG_DATA;
