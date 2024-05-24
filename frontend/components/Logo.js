import Image from "next/image";

export const Logo =()=>{

    return(
        <div className="hidden md:flex items-center gap-x-2">
            <Image
            src="/lg_logo.jpeg"
            height={160}
            width={90}
            alt="Logo"
            />
        </div>
    )
}