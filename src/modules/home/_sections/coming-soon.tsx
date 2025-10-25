import { Cloud } from '../_components'

export default function ComingSoon() {
    return (
        <article className="relative z-0 mx-auto flex flex-col bg-black py-24 lg:py-36 xl:min-h-screen justify-center">
            <Cloud />
            <div className="relative mx-auto flex h-[50dvh] w-10/12 flex-col md:w-7/12 justify-center">
                <h2 className="text-center relative text-4xl leading-relaxed sm:text-5xl sm:leading-relaxed md:text-6xl md:leading-normal">
                    โปรดติดตามกำหนดการ <br /> เร็ว ๆ นี้
                </h2>
            </div>
            <Cloud varaint='bottom'/>
        </article>
    )
}