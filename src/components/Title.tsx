import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

function Title({ children }: Props) {
    return (
        <h1
            id="title"
            className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
        >
            {children}
        </h1>
    );
}

export default Title;
