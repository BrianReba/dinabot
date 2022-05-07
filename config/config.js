module.exports = {
    api: {
        port: process.env.API_PORT 
    },
    
    db: {
        mongo: process.env.MONGO_DB_URL
    }
}