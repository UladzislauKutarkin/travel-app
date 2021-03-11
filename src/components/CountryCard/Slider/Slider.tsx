
const renderSlider = (dataCarousel) => {
    return dataCarousel.map((data) => {
      return <CorouselSlider img={data.imgURL} description={data.description} />;
    });
  };
  
  const CorouselSlider = ({ img, description }) => {
    return (
      <div>
        <img src={img} />
        <p className="legend">{description}</p>
      </div>
    );
  };
  

  export default renderSlider