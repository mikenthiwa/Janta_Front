import envVariables from '../environment';
import dotenv from 'dotenv';

dotenv.config();

export const backEndUrl = () => {
  return envVariables.backEndUrl
};