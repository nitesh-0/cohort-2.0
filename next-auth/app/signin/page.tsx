"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function() {
    const router = useRouter();
    
    return <div>

        <input  className='bg-white text-black' type='text' placeholder='nitesh123@gmail.com'></input><br/><br />
        <input className='bg-white text-black' type='password' placeholder='098765'></input><br/><br />

        <button className='cursor-pointer bg-yellow-500' onClick={async () => {
            const res = await signIn("credentials", {
                username: "",
                password: "",
                redirect: false,
            });
            console.log(res);
            router.push("/")
        }}>Login with email</button>
        <br /><br />

        <button className='cursor-pointer bg-red-500' onClick={async () => {
            await signIn("google", { callbackUrl: "/" });
        }}>Login with google</button>

        <br /><br />
        <button className='cursor-pointer bg-green-500' onClick={async () => {
            await signIn("github", { callbackUrl: "/" });
        }}>Login with Github</button>
    </div>
}