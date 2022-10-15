import {Pool} from 'pg';

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.NODE_ENV === 'production' ? `${process.env.DB_CLUSTER}.` : ''}${process.env.POSTGRES_DB}`,
    config = {
        connectionString,
        ssl: process.env.NODE_ENV === 'production',
    };
const pool = new Pool(config);

async function doPgQuery(sql: string, params?: any[]) {
    try {
        const conn = await pool.connect();
        const results = await conn.query(sql, params);
        conn.release();
        return results?.rows ?? [];
    } catch (e) {
        throw e;
    }
}

export {doPgQuery};
