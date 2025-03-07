'use client'
import { useState } from "react"

export default function Publication () {
    const [mouseEnter, setMouseEnter] = useState<boolean>(false)

    return (
        <>
            <div className="max-w-[450px] mx-auto">
                <div className="flex justify-between items-center relative">
                    <div className="flex justify-center items-center gap-[5px]">
                        <div 
                            className="bg-zinc-900 w-[40px] h-[40px] rounded-full cursor-pointer" 
                            onMouseEnter={()=>{setMouseEnter(true)}} 
                            onMouseLeave={()=>{setMouseEnter(false)}}
                        >
                            <img src="" alt="" />
                        </div>
                        <a 
                            href="" 
                            onMouseEnter={()=>{setMouseEnter(true)}} 
                            onMouseLeave={()=>{setMouseEnter(false)}}
                        >
                            dani_rep
                        </a>
                        <p className="text-secondary">•</p>
                        <p className="text-secondary">1d</p>
                    </div>
                    <button>
                        <img src="/dots.svg" alt="options" />
                    </button>
                    <div 
                        className={`${mouseEnter ? 'lg:flex' : 'hidden'} hidden w-[350px] h-[350px] rounded-[10px] absolute top-full left-[10px] z-10 bg-black border-[1px] border-zinc-800 text-[15px] flex-col justify-evenly`} 
                        onMouseEnter={() => { setMouseEnter(true) }} 
                        onMouseLeave={() => { setMouseEnter(false) }}
                    >
                        <div className="flex justify-start items-center gap-[20px] px-[10px]">
                            <div className="w-[60px] h-[60px] rounded-full bg-zinc-900"><img src="" alt="" /></div>
                            <div>
                                <p>dani_rep</p>
                                <p className="text-secondary">Daniel Hidalgo</p>
                            </div>
                        </div>
                        <div className="flex justify-around items-center text-center">
                            <div>
                                <p>6</p>
                                <p>post</p>
                            </div>
                            <div>
                                <p>290</p>
                                <p>followers</p>
                            </div>
                            <div>
                                <p>190</p>
                                <p>following</p>
                            </div>
                        </div>
                        <div className="h-[115px] flex justify-between items-center">
                            <div className="w-[115px] h-[115px] rounded-[5px] bg-zinc-900"><img src="" alt="" /></div>
                            <div className="w-[115px] h-[115px] rounded-[5px] bg-zinc-900"><img src="" alt="" /></div>
                            <div className="w-[115px] h-[115px] rounded-[5px] bg-zinc-900"><img src="" alt="" /></div>
                        </div>
                        <div className="flex justify-center items-center gap-[10px] px-[20px]">
                            <button className="bg-links py-[6px] w-full rounded-[10px] flex justify-center items-center gap-[5px] hover:bg-hover-links">
                                <img src="/message.svg" alt="message" className="max-w-[20px]" />
                                Message
                            </button>
                            <button className="bg-zinc-800 hover:bg-zinc-900 py-[6px] w-full rounded-[10px]">Following</button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[500px] lg:h-[600px] bg-zinc-900 my-[10px] rounded-[5px] border-[1px] border-zinc-700">
                    <img src="" alt="" />
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-[10px]">
                            <a href="">
                                <img src="/heart.svg" alt="like" className='w-[25px]' />
                            </a>
                            <a href="">
                                <img src="/comment.svg" alt="comment" className='w-[25px]' />
                            </a>
                            <a href="">
                                <img src="/send.svg" alt="share" className='w-[25px]' />
                            </a>
                        </div>
                        <a href="">
                            <img src="/save.svg" alt="save" className='w-[25px]' />
                        </a>
                    </div>
                    <div className="py-[5px]">
                        <a href="" className="font-bold">20,097 Likes</a>
                        <div className="py-[5px] flex flex-col items-start justify-center gap-[5px]">
                            <p><a href="" className="font-bold">dani_rep</a> Os dejo x aquí unas fotitos de ayer ❤️</p>
                            <a href="" className="">See translation</a>
                        </div>
                        <a href="" className="text-secondary">View all 226 comments</a>
                        <div className="flex justify-between items-center gap-[5px] py-[5px]">
                            <input type="text" placeholder="Add a comment..." className="bg-black text-white border-none outline-none w-full placeholder:text-secondary" />
                            <button>
                                <img src="/mood-smile.svg" alt="react" className='w-[20px]' />
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="my-[15px] border-zinc-800" />
            </div>
        </>
    )
}
