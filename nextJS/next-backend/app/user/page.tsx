import axios from "axios"

async function fetchData(){
    const result = await axios.get("http://localhost:3000/api/user")

    return result.data
}

export default async function User(){
    const data = await fetchData()

    return <div>
        <div>
            {data.name}
        </div>
        <div>
            {data.email}
        </div>
    </div>
}