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
  youtubeLink: string;
}

const SONG_DATA: SongData[] = [
  {
    image: el1,
    album: "SEN2 KBRN, VOL. 2",
    artist: "Eladio Carrion",
    song: "HP Freestyle",
    year: "2022",
    youtubeLink: "https://youtu.be/p7hSLy6G9UE?si=2OqySLGY3RonyV2P",
  },
  {
    image: waves,
    artist: "Smart K",
    song: "Waves",
    year: "2022",
    youtubeLink: "https://youtu.be/5RQ9ly7zFYQ?si=yrgSlGZGwIeORe0s",
  },
  {
    image: el2,
    artist: "Eladio Carrion fr Beny Jr",
    song: "Red Bull",
    year: "2021",
    youtubeLink: "https://youtu.be/lA0INn4zNlk?si=PU6V4DcT5D_uE-rU",
  },
  {
    image: reezy,
    album: "WEISSWEIN & HEARTBREAKS",
    artist: "Reezy",
    song: "NO CAP",
    year: "2020",
    youtubeLink: "https://youtu.be/X6Qo2UgK3kA?si=xFqDeesyqvwpPQce&t=101",
  },
  {
    image: moses,
    artist: "Joe Moses",
    song: "We Different",
    album: "West SyoutubeLinke II",
    year: "2020",
    youtubeLink: "https://youtu.be/UKFCXU5JY64?si=rDpP8XSHni5ZBU1Y",
  },
  {
    image: kyb,
    artist: "Beny Jr ft Morad",
    song: "K y B",
    album: "30",
    year: "2022",
    youtubeLink: "https://youtu.be/lJ_ViAV1uLk?si=MunP0-pPEgvYnUJV",
  },
  {
    image: cassow,
    artist: "Cassow",
    song: "BRAKE LIGHTS",
    year: "2020",
    youtubeLink: "https://youtu.be/iFxQzGm1Kwg?si=lEUNl8U48lUJOnGN",
  },
  {
    image: arena,
    artist: "Smart K",
    song: "Arena",
    year: "2019",
    youtubeLink: "https://youtu.be/R06X7xrE4B8?si=KsbwaJCbcjGZF4fq",
  },
  {
    image: beefjay,
    artist: "Papi Trujillo ft Yung Beef",
    song: "Un Porno",
    album: "Beef Jay",
    year: "2019",
    youtubeLink: "https://youtu.be/m-cdWs-DqHI?si=IG4g-gGTH5M9zoFS",
  },
  {
    image: finesse,
    artist: "Patrick Toussaint",
    song: "Finesse",
    year: "2019",
    youtubeLink: "https://youtu.be/ZuDRJg7rI88?si=S2qDZnIKCBH_2P0-",
  },
  {
    image: kaidy,
    artist: "Kaidy Cain ft Dice Ailes",
    song: "Hasta el Piso",
    year: "2019",
    youtubeLink: "https://youtu.be/MUG2XPSIVyc?si=lth3wSqWecW8nAi0",
  },
  {
    image: sticky,
    artist: "Sticky M.A.",
    song: "Hentai",
    year: "2019",
    youtubeLink: "https://youtu.be/27nGVJjHPfU?si=RfOsjw66TdJNFnf6",
  },
  {
    image: saniser,
    artist: "Şanişer",
    song: "Dünyadan Alacaklarim Var",
    album: "LUDOVICO II",
    year: "2018",
    youtubeLink: "https://youtu.be/giDp5s3qqNc?si=9x8GRpBF_Fw-P6EQ",
  },
  {
    image: nikone,
    artist: "Nikone",
    song: "Dia a Day",
    album: "Patato",
    year: "2014",
    youtubeLink: "https://youtu.be/ElajKwdTafo?si=D-AX6Z5OazKNh0EC",
  },
];

export default SONG_DATA;
