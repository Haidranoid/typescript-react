import React, {useState} from 'react';

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
    const [list] = useState<User[]>(users);
    const [name, setName] = useState<string>('');
    const [userFound, setUserFound] = useState<User | undefined>();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onDrag = (e: React.DragEvent<HTMLDivElement>) => {

    }

    const onClick = () => {
        const found = list.find(user => user.name === name);
        setUserFound(found);
    };

    return <div>
        <h3>Search user</h3>
        <input type="text" value={name} onChange={onChange}/>
        <button onClick={onClick}>Search</button>
        <div draggable onDrag={onDrag}>Drag me!</div>
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