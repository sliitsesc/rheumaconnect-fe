enum ENV {
  PROD = "prod",
  STAGE = "stage",
  DEV = "dev",
}

const isProd = process.env.ENVIRONMENT === ENV.PROD;

export const API_URL = isProd
  ? process.env.PROD_API_URL
  : process.env.STAGE_API_URL;
