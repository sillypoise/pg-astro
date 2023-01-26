import { useState } from "react";

function Header() {
    const [count, setCount] = useState(0);
    return (
        <article>
            <h1>Component</h1>
            <p>FTW</p>
            <span>{count} </span>
            <button onClick={() => setCount((c) => c + 1)}>-</button>
            <button onClick={() => setCount((c) => c - 1)}>+</button>
        </article>
    );
}

export { Header };
