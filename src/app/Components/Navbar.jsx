"use client"

import Image from "next/image"
import Link from "next/link";

export default function Navbar() {

    const clickBtnWpp = () => {
        const phoneNumber = '5511994929467';

        const message = `Olá, tenho interesse em solicitar um orçamento!`;

        const encodedMessage = encodeURI(message);
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(url, '_blank');
    };

    return (
        <section className="flex justify-center items-center flex-col w-screen mt-[120px]">
            <div className="flex flex-col justify-center items-center text-center">
                <Image src="/Kenia_Caroline1.jpeg" width={150} height={100} alt="foto da kênia" className="rounded-[200px]" />
                <h1 className="mt-[20px] text-[40px]">Kênia Caroline</h1>
                <p>Software Developer</p>
            </div>

            <div className="flex flex-col justify-center items-center mt-[80px] gap-4">
                <div className="botoes-links flex ">
                    <Image className="text-start" src='/alien-icon.png' width={20} height={10} />
                    <div style={{ flex: 1, textAlign: 'center' }}>
                    <Link href="https://keniadevportfolio.vercel.app/" target="_blank">Meu Site Portfólio</Link>
                    </div>
                </div>
                <div className="botoes-links flex">
                    <Image src='/alien-icon.png' width={20} height={10} />
                    <div style={{ flex: 1, textAlign: 'center' }}>
                    <Link href="https://www.linkedin.com/in/keniac/" target="_blank">Linkedin</Link>
                    </div>
                </div>
                <div className="botoes-links flex">
                    <Image src='/alien-icon.png' width={20} height={10} />
                    <div style={{ flex: 1, textAlign: 'center' }}>
                    <Link href="https://github.com/euukc" target="_blank">Github</Link>
                    </div>
                </div>
                <div className="botoes-links flex">
                    <Image src='/alien-icon.png' width={20} height={10} />
                    <div style={{ flex: 1, textAlign: 'center' }}>
                    <Link onClick={clickBtnWpp} className="text-[16px] md:text-[18px]" href="/" target="_blank">Entre em contato comigo</Link>
                    </div>
                </div>
            </div>

        </section>
    )
}