export interface sOptions {
    definition: {
      openapi: string;
      info: {
        title: string;
        version: string;
        description: string;
      };
      servers: {
        url: string;
      }[];
    };
    apis: string[];
  }