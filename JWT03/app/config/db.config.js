export default {
    HOST: "mysql.railway.internal",
    USER: "root",
    PASSWORD: "YPquKrTbiSmbaIkTyZFgdGRzuXVqajEy",
    DB: "railway",
    PORT: 34652,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};