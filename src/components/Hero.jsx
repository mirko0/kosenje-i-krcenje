import { Button } from './ui/button'
import { IconPhone } from '@tabler/icons-react';


const Hero = () => {
    return (
        <>
            <div style={{ marginTop: "3rem" }} className="text-center">
                <h1 className={"mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white"}>
                    Košenje i krčenje
                </h1>
                <p className={"mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-white"}>
                    Budite slobodni da nas kontaktirate putem broja telefona, viber porukom ili preko društvenih mreža.
                </p>

                <Button variant="transparent" size={"xl"} asChild>
                    <a href="tel:+381653502508">
                        <IconPhone></IconPhone>
                        065/350-250-8
                    </a>
                </Button>

            </div >
        </>
    )
}

export default Hero