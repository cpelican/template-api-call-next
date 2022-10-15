import React from 'react';
import {DataFromDb} from 'server/interfaces';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
    const {data, error} = useSWR<{data: DataFromDb[]}>('/api/postgres-endpoint', fetcher);

    if (error) {
        return <div>{'Failed to load'}</div>;
    }
    if (!data) {
        return <div>{'Loading...'}</div>;
    }

    return (
        <ul>
            {(data.data ?? []).map((p: DataFromDb) => (
                <p key={p.id}>{p.description}</p>
            ))}
        </ul>
    );
}
