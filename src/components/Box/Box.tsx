import { forwardRef, ReactNode } from "react"

type BoxProps = {
    children?: ReactNode
    className?: string
    onClick?: () => void
    as?: "section" | "div" | "aside" | "main" | "header" | "footer"
}

const Box = forwardRef<HTMLDivElement, BoxProps>(({ className, children, as = "div", ...props }, ref) => {
    switch (as) {
        case "div":
            return (
                <div ref={ref} className={className} {...props}>
                    {children}
                </div>
            )
        case "aside":
            return (
                <aside ref={ref} className={className} {...props}>
                    {children}
                </aside>
            )
        case "section":
            return (
                <section ref={ref} className={className} {...props}>
                    {children}
                </section>
            )
        case "main":
            return (
                <main ref={ref} className={className} {...props}>
                    {children}
                </main>
            )
        case "header":
            return (
                <header ref={ref} className={className} {...props}>
                    {children}
                </header>
            )
        case "footer":
            return (
                <footer ref={ref} className={className} {...props}>
                    {children}
                </footer>
            )
    }
})

Box.displayName = "Box"

export { Box }
