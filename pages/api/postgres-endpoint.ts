import {NextApiRequest, NextApiResponse} from 'next';
import {doPgQuery} from 'server/db-postgres';
import {selectAllFromTable} from 'server/sql';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        const results = await doPgQuery(selectAllFromTable);
        res.status(200).json({data: results});
    } catch (e) {
        res.status(404).json({e});
    }
}
