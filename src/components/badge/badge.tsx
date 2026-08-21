import { BadgeContent } from "@/types/BadgeContent";


export default function Badge ({content}: BadgeContent) {
    return (
        <span className="border bg-coffee rounded-lg py-2 px-4 font-semibold">{content}</span>
    );
}