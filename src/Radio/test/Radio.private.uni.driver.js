import { radioDriverFactory as publicDriverFactory } from '../Radio.uni.driver';

export const radioPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
