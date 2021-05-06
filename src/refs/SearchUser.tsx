import React, {useState, useRef, useEffect} from 'react';

const users = [
    {
        name: 'sarah',
        age: 20
    },
    {
        name: 'joseph',
        age: 24
    },
    {
        name: 'alfred',
        age: 40
    }
]

interface User {
    name: string,
    age: number,
}

const SearchUser: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState<string>('');
    const [userFound, setUserFound] = useState<User | undefined>();

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onClick = () => {
        const found = users.find(user => user.name === name);
        setUserFound(found);
    };

    return <div>
        <h3>Search user</h3>
        <input ref={inputRef} type="text" value={name} onChange={onChange}/>
        <button onClick={onClick}>Search</button>
        <span>
            {userFound
                ? <span>
                    <h3>User Found</h3>
                    name :{userFound.name} <br/>
                    age : {userFound.age}
                </span>
                : <h3>User not Found</h3>
            }
        </span>
    </div>
}

export default SearchUser;