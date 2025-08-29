
import { Cubato } from "./fonts"

export default function Title({ text, className }: { text: string, className?: string }) {
    return (
        <div className={` ${className} ${Cubato.className}`}>
            {text}
        </div>
    )
}