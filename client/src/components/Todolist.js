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

  const handlecheck = async ({title, description,checked,_id},index) => {
    
      const response = await fetch(`${host}/api/list/updatelist/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ title, description, checked: !checked }),
      });
        const jsonn= await response.json();
      console.log(jsonn);
  
      // let newnotess = JSON.parse(JSON.stringify(notes));
      // for (let index = 0; index < newnotess.length; index++) {
      //   const element = newnotess[index];
      //   if (element._id === _id) {
      //     newnotess[index].title = title;
  
      //     newnotess[index].description = description;
      //     newnotess[index].checked = checked;
  
      //     break;
      //   }
      // }

      let newnotes = [...notes];
newnotes[index].checked = jsonn.list.checked;
setNotes(newnotes);
  
      // setNotes(newnotess);
    
  };
  const deleteTask = async(obj) => {
    const {_id,description,title,checked}=obj;
    const response = await fetch(`${host}/api/list/deletelist/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
         console.log('del mdg',json)
    //  //console.log("deleting the node"+id);
    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    });
    setNotes(newNotes);
  };

  const updateListArray = async(obj, index) => {
    const {_id,title,description,checked}=obj;
    const response = await fetch(`${host}/api/list/updatelist/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, checked: checked }),
    });
      const jsonn= await response.json();
    console.log(jsonn);

    // let newnotess = JSON.parse(JSON.stringify(notes));
    // for (let index = 0; index < newnotess.length; index++) {
    //   const element = newnotess[index];
    //   if (element._id === _id) {
    //     newnotess[index].title = title;

    //     newnotess[index].description = description;
    //     newnotess[index].checked = checked;

    //     break;
    //   }
    // // }
    // setNotes(newnotess);
  

    let newnotes=[...notes];
    newnotes[index]=jsonn.list;
    setNotes(newnotes);
  
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = async(taskObj) => {
    const {title,description}=taskObj;
    
    const response = await fetch(`${host}/api/list/addlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
    
  };

  return (
    <>
     <div className="container flex flex-row justify-center bg-gray-200 rounded-lg">
      <div className="    flex flex-col justify-between   py-8 px-8">
        <img className=" h-20 w-24 " src="./todo.jpg"/>
        <button className="bg-gray-500 rounded-lg shadow-md shadow-sky-800/100 py-2 px-2 mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      </div>
      <div className="flex flex-row justify-center space-x-20 mb-16 mt-4">
        <button
          className={` rounded-lg shadow-md shadow-sky-800/100 py-2 px-2 ${ (todotab===true)?"bg-gray-900 text-gray-200":"bg-gray-500"}`}
          onClick={() => {
            settodotab(true);
          }}
        >
          todotask
        </button>
        <button
          className={` rounded-lg shadow-md shadow-sky-800/100 py-2 px-2 ${ (todotab===false  )?"bg-gray-900 text-gray-200":"bg-gray-500"}  `}
          onClick={() => {
            settodotab(false);
          }}
        >
          completedtask
        </button>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-x-4 mx-2 my-2">
        {notes &&
          notes.map((obj, index) => {
            if (obj.checked !== todotab) {
              return (
                <Card
                  todotab={todotab}
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
