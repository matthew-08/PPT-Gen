import { UserSlide } from '../types';

const sortUserSlidesResponse = (userSlides: UserSlide[]) => {
  return userSlides.sort((a, b) => {
    return a.slideNumber - b.slideNumber;
  });
};

export default sortUserSlidesResponse;
