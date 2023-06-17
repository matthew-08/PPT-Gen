import { UserSlide } from '../types';

const sortUserSlidesResponse = (userSlides: UserSlide[]) => {
  return userSlides
    .sort((a, b) => {
      return a.slideNumber - b.slideNumber;
    })
    .map((slide) => {
      slide.fields.sort((a, b) => a.fieldType.id - b.fieldType.id);
      return slide;
    });
};

export default sortUserSlidesResponse;
