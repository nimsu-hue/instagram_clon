'use client'
import { useState } from "react"

export default function User () {
    const [mouseEnter, setMouseEnter] = useState<boolean>(false)

    return (
        <>
            <div className="flex justify-between items-center relative">
                <div className="flex justify-start items-center gap-[10px]">
                    <div 
                        className="bg-zinc-900 w-[50px] h-[50px] rounded-full cursor-pointer" 
                        onMouseEnter={()=>{setMouseEnter(true)}} 
                        onMouseLeave={()=>{setMouseEnter(false)}}
                    >
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p 
                            className="cursor-pointer" 
                            onMouseEnter={()=>{setMouseEnter(true)}} 
                            onMouseLeave={()=>{setMouseEnter(false)}}
                        >
                            monserrat_k3
                        </p>
                        <p className="text-secondary">Suggested for you</p>
                    </div>
                </div>
                <button className="text-links hover:text-primary">Follow</button>
                <div 
                    className={`${mouseEnter ? 'flex' : 'hidden'} w-[350px] h-[350px] rounded-[10px] absolute top-full left-1/2 transform -translate-x-1/2 z-10 bg-black border-[1px] border-zinc-800 shadow-lg shadow-zinc-800 text-[15px] flex-col justify-evenly`} 
                    onMouseEnter={() => { setMouseEnter(true) }} 
                    onMouseLeave={() => { setMouseEnter(false) }}
                >
                    <div className="flex justify-start items-center gap-[20px] px-[10px]">
                        <div className="w-[60px] h-[60px] rounded-full bg-zinc-900"><img src="" alt="" /></div>
                        <div>
                            <p>monserrat_k3</p>
                            <p className="text-secondary">Monserrat Pereira</p>
                        </div>
                    </div>
                    <div className="flex justify-around items-center text-center">
                        <div>
                            <p>0</p>
                            <p>post</p>
                        </div>
                        <div>
                            <p>220</p>
                            <p>followers</p>
                        </div>
                        <div>
                            <p>380</p>
                            <p>following</p>
                        </div>
                    </div>
                    <div className="h-[115px] flex justify-between items-center">
                        <div className="w-[115px] h-[115px] rounded-[5px] bg-zinc-900"><img src="" alt="" /></div>
                        <div className="w-[115px] h-[115px] rounded-[5px] bg-zinc-900"><img src="" alt="" /></div>
                        <div className="w-[115px] h-[115px] rounded-[5px] bg-zinc-900"><img src="" alt="" /></div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="bg-links hover:bg-hover-links w-[300px] py-[6px] rounded-[10px] mx-auto flex justify-center items-center gap-[5px]">
                            <img src="/user.svg" alt="add user" className="max-w-[20px]" />
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}