import 'dotenv/config';

export default {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DB: process.env.DB_NAME,
    PORT: process.env.DB_PORT,
    dialect: "mysql",
  
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
  };
  