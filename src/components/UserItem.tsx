import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
}
const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: '15px', border: '1px solid black'}}>
            {user.id}. {user.name} live in {user.address.city} city on {user.address.street} street.
        </div>

    );
};

export default UserItem;