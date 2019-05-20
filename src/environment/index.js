import dotenv from 'dotenv';

dotenv.config();

const envVariables = {
  backEndUrl: process.env.BACK_END_URL
};
export default envVariables

