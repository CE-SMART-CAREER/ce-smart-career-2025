import { cn } from "@/shared/utils"
import Image from "next/image"

type Props = {
    varaint?: 'top' | 'bottom'
}

export default function Cloud({ varaint = 'top' }: Props) {
    return (
        <div className={
            cn(
                'absolute w-full',
                varaint === 'top'? 'left-0 top-0': '-left-0 bottom-0 -rotate-180'
            )
        }>
            <Image
                src="/assets/illustrations/cloud.png"
                alt="cloud-png"
                width={2880}
                height={347}
                className="object-cover"
            />
        </div>
    )
}