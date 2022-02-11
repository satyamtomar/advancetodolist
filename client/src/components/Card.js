import React, {useState} from 'react';
import EditTask from './EditTask'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import {BsCheckLg} from "react-icons/bs"
import {FaUndoAlt} from "react-icons/fa"
const Card = ({todotab,taskObj, index, deleteTask, updateListArray,handlecheck}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
    
    return (
        <div class = "card-wrapper mr-5 text-wrap my-2 ">
            <div class = "card-top " style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder " style={{"word-wrap":"break-word"}}>
            <div className="my-2 py-6   ">
                <span class = "card-header " style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.title}</span>
                <p className = "mt-3 " style={{"word-wrap":"break-word",}}>{taskObj.description}</p>
                </div>   
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px" }} className="space-x-3 flex flex-row justify-between mt-3">
                     {(!taskObj.checked)?
                        <BsCheckLg style={{"color":"green"}} onClick={()=>{handlecheck(taskObj,index)}}/>

                        :
                        <FaUndoAlt style={{"color":"green"}} onClick={()=>{handlecheck(taskObj,index)}}/>
                        }
                        <FaEdit className ={ `far fa-edit mr-3 ${taskObj.checked && "d-none" }`} style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></FaEdit>
                
                    <MdDelete className="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></MdDelete>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;