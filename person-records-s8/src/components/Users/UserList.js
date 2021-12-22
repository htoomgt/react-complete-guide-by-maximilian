import React from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card";
import "./UserList.css";

const UserList = (props) => {
    return (
        <Card>
            {/*  {
                props.users.map((user) => {
                    console.log(user);
                })
                
            } */}

            <table className="user_data_grid">
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

UserList.propTypes = {};

export default UserList;
