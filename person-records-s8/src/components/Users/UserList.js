import React from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card";
import styleClasses from "./UserList.module.css";

const UserList = (props) => {
    return (
        <Card className={`${styleClasses.user_data_grid}`}>            

            <table >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user, index) => {
                        return (
                            <tr key={user.id}>
                                <td>{index+1}</td>
                                <td>{user.username}</td>
                                <td>{user.age}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;
