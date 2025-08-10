import React from "react"
import { FormMessage as ShadCNFormMessage } from "./form"


export const FormMessage = ({ className, ...props }: React.ComponentProps<"p">) => {
    return (
        <div className="min-h-[1.25rem]">
            <ShadCNFormMessage className={className} {...props} />
        </div>
    );
}
