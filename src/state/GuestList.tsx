import React, {useState} from "react";

const GuestList: React.FC = () => {
    const [list, setList] = useState<string[]>([]);
    const [name, setName] = useState<string>('');

    const onClick = () => {
        setList([...list, name])

        setName('');
    };

    return <div>
        <h3>Party list guest</h3>
        <ul>
            {list.map(element => <li>{element}</li>)}
        </ul>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={onClick}>Add</button>
    </div>
}

export default GuestList;