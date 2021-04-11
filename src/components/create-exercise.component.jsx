import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Will allow us to add exercises into the database

export default function CreateExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setUsers(["test user"]);
      setUsername("test user");
    }, 5000);
  });
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };
  const onChangeDate = (date) => {
    setDate(date);
  };
  const onSubmit = (e) => {
    e.preventDefault(); //prevents default HTML form behavior from taking place

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };
    console.log(exercise);
    window.location = "/"; //takes us back to homepage(exercise list)
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <select
            //inputref={() => this.inputElement}
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map((user) => {
              //returns each user as an option in the select box
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            required
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
