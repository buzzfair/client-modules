import {
  AlertIcon,
  CloseCircleIcon,
  InfoCircleIcon,
  RatingStarCircleIcon,
  CheckCircledIcon,
} from '@codecademy/gamut-icons';

export enum BannerType {
  Notice = 'notice',
  Announcement = 'announcement',
  Error = 'error',
  Info = 'info',
  Success = 'success',
}

export const BANNER_CONFIG = {
  notice: AlertIcon,
  error: CloseCircleIcon,
  info: InfoCircleIcon,
  announcement: RatingStarCircleIcon,
  success: CheckCircledIcon,
};
