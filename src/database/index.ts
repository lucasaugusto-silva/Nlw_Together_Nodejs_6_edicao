import { AppDataSource } from "../../data-source"

AppDataSource.initialize().then(async () => {
    console.log('Database is running');
}).catch(error => console.log(error))
