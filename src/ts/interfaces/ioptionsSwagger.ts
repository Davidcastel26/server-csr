export interface sOptions{
    definition: {
      openapi: string;
      info: {
        title: string;
        version: string;
        description: string;
        contact: Contact
      };
      servers: {
        url: string;
      }[];
    };
    apis: string[];
  }

  export interface Contact {
    name: string
    url: string
    email: string
  }