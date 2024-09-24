import Image from "next/image"


const Logos = () => {
    return (
        <div>   
            <div className='flex'>
            <Image width="30" height="30" src={'/logo/k.png'} alt="k" />
            <Image width="30" height="30" src={'/logo/a.png'} alt="a" />
            <Image width="30" height="30" src={'/logo/r.png'} alt="r" />
            <Image width="30" height="30" src={'/logo/a.png'} alt="a" />
            <Image width="30" height="30" src={'/logo/n.png'} alt="n" />
            </div>
            <div className='flex'>
                <Image width="25" height="25" src={'/logo/g.png'} alt="g" />
                <Image width="25" height="25" src={'/logo/ga.png'} alt="a" />
                <Image width="25" height="25" src={'/logo/gn.png'} alt="n" />
                <Image width="25" height="25" src={'/logo/d.png'} alt="d" />
                <Image width="25" height="25" src={'/logo/h.png'} alt="h" />
                <Image width="25" height="25" src={'/logo/i.png'} alt="i" />
            </div>
        </div>
    )
}

export default Logos