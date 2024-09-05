declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_MODE: string;
      NEXT_MONGO_CONNECTION_STRING: string;
      NEXT_PUBLIC_API_KEY: string;
      NEXT_PUBLIC_AUTH_DOMAIN: string;
      NEXT_PUBLIC_PROJECTID: string;
      NEXT_PUBLIC_STORAGEBUCKET: string;
      NEXT_PUBLIC_MESSAGINGSENDERID: string;
      NEXT_PUBLIC_APPID: string;
      NEXT_PUBLIC_MESUREMENTID: string;
    }
  }
}
export {};
