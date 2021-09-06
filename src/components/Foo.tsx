import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

type FooProps = {
    title: string;
    hello: (m: string) => void;
}

const Foo: React.FC<FooProps> = ({title, hello}) => {

    const [message, setMessage] = useState<string>('');

    const {firstName, lastName}: any = {
        firstName: "Foo",
        lastName: "bar", 
        age: 42
    }

    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        // componentDidMount
        setMessage(title);
        return () => {
            // componentWillUnmount
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useLayoutEffect(() => {
        // ref.current.style.color = "red";
    }, [ref]);



    return (
        <div>
            <p ref={ref}>{title}</p>
            <p>{firstName} {lastName}</p>
            <input type="text" value={message} onChange={(e:any) => setMessage(e.target.value)}/>
            <button onClick={() => hello(message)}>Click me !</button>
        </div>
    )
}

export default Foo
