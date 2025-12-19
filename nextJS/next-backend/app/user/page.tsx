import prisma from '@/lib/prisma';


// async function fetchData(){
//     const result = await axios.get("http://localhost:3000/api/user")

//     return result.data
// }

async function fetchData(){
    try {
        const userDetails = await prisma.user.findFirst()
        return userDetails
    }
    catch(e){
        console.log(e)
    }
    
}

export default async function User(){
    const data = await fetchData()

    return <div>
        <div>
            {data?.email}
        </div>
    </div>
}