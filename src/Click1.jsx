import { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    const plus = (num) => {
        if (num == -2 && count <= 1) {
            return
        }
        setCount(count + num);
    }

    return (
        <div>
            <div>
                Count: {count}
            </div>
            <button
                onClick={() => plus(1)}
            >
                +1
            </button>
            <button
                onClick={() => plus(-2)}
            >
                -2
            </button>
        </div>
    );
};


export default Count