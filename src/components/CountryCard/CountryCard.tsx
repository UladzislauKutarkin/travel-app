import "./CountryCard.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import ReactWebMediaPlayer from "react-web-media-player";
const ukraine = require("../../videos/ukraine.mp4");

const dataCarousel = [
  {
    imgURL:
      "https://wikiway.com/upload/hl-photo/00c/452/kievo-pecherskaya-lavra_130.jpg",
    description:
      "Киево-Печерская лавра.Легендарный историко-архитектурный объект города Киев. Дата возведения – 1051 год.",
  },
  {
    imgURL: "https://wikiway.com/upload/hl-photo/b06/378/bukovel_124.jpg",
    description:
      " Буковель – один из самых известных украинских горнолыжных курортов. Он расположен на высоте более 900 метров рядом с селом Поляница Ивано-Франковской области.",
  },
  {
    imgURL:
      "https://wikiway.com/upload/hl-photo/e92/be1/chernobylskaya-aes_75.jpg",
    description:
      " Буковель – один из самых известных украинских горнолыжных курортов. Он расположен на высоте более 900 метров рядом с селом Поляница Ивано-Франковской области.",
  },
];

// const renderCard = (dataCarousel) => {
//   return dataCarousel.map(datas => {return (<Carousel datas={datas} />)} )
// }

const CountryCard = () => {
  return (
    <div className="country-card">
      <div className="country-wrapper--description">
        <div>
          <div className="country-photo--wrapper">
            <img
              className="country-photo"
              src="https://www.rae.ma/wp-content/uploads/2019/10/Ukraine-Kiev-vue-place-Independance-1024x742.jpg"
              alt="Country"
            />
          </div>
          <h2>Country Name</h2>
          <h4>Descroption</h4>
        </div>
        {/* <WidgetsBox /> */}
      </div>
      <Carousel infiniteLoop={true} width="70%" showStatus={false}>
        <div>
          <img src="https://wikiway.com/upload/hl-photo/00c/452/kievo-pecherskaya-lavra_130.jpg" />
          <p className="legend">
            Киево-Печерская лавра.Легендарный историко-архитектурный объект
            города Киев. Дата возведения – 1051 год.
          </p>
        </div>
        <div>
          <img src="https://wikiway.com/upload/hl-photo/b06/378/bukovel_124.jpg" />
          <p className="legend">
            Буковель – один из самых известных украинских горнолыжных курортов.
            Он расположен на высоте более 900 метров рядом с селом Поляница
            Ивано-Франковской области.
          </p>
        </div>
        <div>
          <img src="https://wikiway.com/upload/hl-photo/e92/be1/chernobylskaya-aes_75.jpg" />
          <p className="legend">
            Чернобыльская АЭС – атомная электростанция на Украине, получившая
            широкую и печальную известность во всем мире в связи с аварией,
            случившейся в ночь с 25 на 26 апреля 1986 года.{" "}
          </p>
        </div>
      </Carousel>
      <div className="country-video">
        <ReactWebMediaPlayer title="Video about country" video={ukraine} />
      </div>
    </div>
  );
};

export default CountryCard;
