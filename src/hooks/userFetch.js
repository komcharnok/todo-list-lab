import {useState, useEffect} from 'react'
import axios from 'axios'

export default function userFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const run = async () => {
            try {
                setLoading(true)
                const res = await axios.get(url)
                setData(res.data)
                setLoading(false);
            } catch (err) {
                setError(err)
                setLoading(false);
            }
        }
        run()
    }, [url])

    return [data, error, loading]
}
