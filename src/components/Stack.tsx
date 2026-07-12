import "../styles/stack.scss"

interface StackProps {
    pages: React.JSX.Element[]
}

export default function Stack({pages}: StackProps) {
    return (
        <div className="stack">
            {pages.map((page, i) => <div key={i} className="stack__page">{page}</div>)}
        </div>
    )
}