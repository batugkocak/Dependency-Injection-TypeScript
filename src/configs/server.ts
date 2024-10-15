export const serverConfig = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  host_url: process.env.HOSTNAME as string | undefined,
};
