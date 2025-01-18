export default function FadeTransition({ tV, children, forceStyle }: { tV: number, children?: React.ReactNode, forceStyle?: React.CSSProperties }) {
    return <div style={{ opacity: tV, ...forceStyle }}>
        {children}
    </div>
}