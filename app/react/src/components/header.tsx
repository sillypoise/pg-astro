import { useState } from "react";

function Header() {
    const [count, setCount] = useState(0);
    return (
        <article className="stack">
            <h1 className="text-1">Component</h1>
            <p>FTW</p>
            <div className="cluster [--cluster-gap:theme(spacing.xs)]">
                <span>{count} </span>
                <button
                    className="px-xs rounded-md bg-scheme-light-neutral-surface-3"
                    onClick={() => setCount((c) => c - 1)}
                >
                    -
                </button>
                <button
                    className="px-xs rounded-md bg-scheme-light-neutral-surface-3"
                    onClick={() => setCount((c) => c + 1)}
                >
                    +
                </button>
            </div>
        </article>
    );
}

export { Header };
