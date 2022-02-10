import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import Card from "./Card";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const host = "http://localhost:5000";
  const notesinitial = [];

  const [notes, setNotes] = useState(notesinitial);
  const [todotab, settodotab] = useState(true);
  useEffect(() => {
    // let arr = localStorage.getItem("taskList")

    // if(arr){
    //     let obj = JSON.parse(arr)
    //     setTaskList(obj)
    // }
    const fetchallnotes = async () => {
      const response = await fetch(`${host}/api/list/fetchlist`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const jsonnn = await response.json();
      console.log(jsonnn);
      setNotes(jsonnn);
    };

    fetchallnotes();
  }, []);

  const handlecheck = async (title, description,checked,id) => {
    const response = await fetch(`${host}/api/list/editlist/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description: description, checked: !checked }),
    });
    const jsonnn = await response.json();
    console.log(jsonnn);
    setNotes(jsonnn);
  };
  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };
  const getallchecked = () => {};

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="btn btn-primary "
          onClick={() => {
            settodotab(true);
          }}
        >
          todo
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            settodotab(false);
          }}
        >
          completedlist
        </button>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-x-4 mx-2 my-2">
        {notes &&
          notes.map((obj, index) => {
            if (obj.checked !== todotab) {
              return (
                <Card
                  taskObj={obj}
                  index={index}
                  deleteTask={deleteTask}
                  handlecheck={handlecheck}
                  updateListArray={updateListArray}
                />
              );
            } else return null;
          })}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
