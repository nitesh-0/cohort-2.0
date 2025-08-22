"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:npg_5g0MIkGCOfFH@ep-red-art-aeqshtu5-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});
async function createTable() {
    await client.connect();
    const result = await client.query(` 
            CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(result);
}
//createTable()
//Inserting data into table
// async function insertData(username: string, email: string, password: string){
// try {
//     await client.connect(); // Ensure client connection is established
//     // Use parameterized query to prevent SQL injection
//     const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
//     const values = [username, email, password];
//     const res = await client.query(insertQuery, values);
//     console.log('Insertion success:', res); // Output insertion result
//   } catch (err) {
//     console.error('Error during the insertion:', err);
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }
// Example usage
//insertData('username5', 'user5@example.com', 'user_password').catch(console.error);
async function queryData(email) {
    try {
        await client.connect(); // Ensure client connection is established
        // Use parameterized query to prevent SQL injection
        const insertQuery = "SELECT * FROM users WHERE email = $1";
        const values = [email];
        const res = await client.query(insertQuery, values);
        //console.log('User data:', res.rows); // Output insertion result
        console.log('User rows:::', res.rows); // Output insertion result
        if (res.rows.length > 0) {
            console.log("user found:", res.rows[0]);
            return res.rows[0];
        }
        else {
            console.log("No User exists with this email");
            return null;
        }
    }
    catch (err) {
        console.error('Error during the insertion:', err);
    }
    finally {
        await client.end(); // Close the client connection
    }
}
// Example usage
queryData("user5@example.com");
//# sourceMappingURL=index.js.map