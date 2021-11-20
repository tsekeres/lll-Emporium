import React from 'react';
// import { Fade } from 'react-slideshow-image';
import {
  SlideShow,
  Fade,
  EachFade,
  ImgContainer,
  Img,
} from './WelcomeImgSlideShowElements';
import welcomeImg from '../../../Assets/ViewStockPhotos/WelcomeImg.jpeg';
import couple from '../../../Assets/ViewStockPhotos/coupleonbeach.jpeg';
import ironing from '../../../Assets/ViewStockPhotos/womenfoldingclothes.jpeg';
import driving from '../../../Assets/ViewStockPhotos/manworking.jpeg';
import cleaning from '../../../Assets/ViewStockPhotos/womencooking.jpeg';
// import 'react-slideshow-image/dist/styles.css';

const colors = ['#FFBB28', '#0088FE', '#FFBB28', '#00C49F', '#FFBB28'];

export const SlideShowComponent = () => {
  const [index, setIndex] = React.useState(0);
  const delay = 7000;
  const fadeImages = [welcomeImg, couple, ironing, driving, cleaning];

  React.useEffect(() => {
    setTimeout(
      // eslint-disable-next-line no-confusing-arrow
      () => setIndex((prevIndex) => prevIndex === colors.length - 1 ? 0 : prevIndex + 1),
      delay
    );
    return () => {};
  }, [index]);

  return (
    <SlideShow>
      <Fade style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {fadeImages.map((fadeImage, indx) => (
          <EachFade key={indx}>
            <ImgContainer className='image-container'>
              <Img src={fadeImage} />
            </ImgContainer>
          </EachFade>
        ))}
        ;
      </Fade>
    </SlideShow>
  );
};

export default SlideShowComponent;
