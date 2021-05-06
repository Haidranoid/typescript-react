import React, {Component} from 'react';

interface User {
    name: string,
    age: number,
}

interface SearchUserProps {
    users: User[]
}

interface SearchUserState {
    name: string,
    userFound: User | undefined,
}

class SearchUser extends Component<SearchUserProps, SearchUserState> {

    constructor(props: SearchUserProps) {
        super(props)
        this.state = {
            name: '',
            userFound: undefined,
        }
    }

    /*
      state: SearchUserState = {
        name: '',
        user: undefined,
    }*/

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.target.value
        })
    }

    onClick = () => {
        const found = this.props.users.find(user => user.name === this.state.name);
        this.setState({
            userFound: found
        })
    };

    render() {
        const {name, userFound} = this.state;
        return <div>
            <h3>Search user</h3>
            <input type="text" value={name} onChange={this.onChange}/>
            <button onClick={this.onClick}>Search</button>
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
    };
}

export default SearchUser;