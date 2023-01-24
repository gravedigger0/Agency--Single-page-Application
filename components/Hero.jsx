import React from "react";
import Image from "next/image";


const Hero = () => {
    return (
        <div className="h-[88vh] w-full relative bg-">
            <Image src="/Vector.svg" fill objectFit="cover" className="" />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="mt-[8rem] mx-[10rem] mb-[5rem] flex">
                    <section className="text-black w-[40%] h-full">
                    <h1 className="text-2xl font-bold tracking-tight text-accent">Digital Marketing</h1>
                    </section>
                    <section className="text-black w-[60%] h-full border">
                        Image
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Hero;