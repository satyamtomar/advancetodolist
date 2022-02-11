import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState(taskObj.title);
    const [description, setDescription] = useState(taskObj.description);
    
    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
        }
        setDescription(value)


    }

    useEffect(() => {
        setTaskName(taskObj.title)
        setDescription(taskObj.description)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {...taskObj}
        tempObj['title'] = taskName;
        tempObj['description'] = description;
        updateTask(tempObj)
        toggle();
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button className="bg-gray-500 text-gray-300" color="" onClick={handleUpdate}>Update</Button>{' '}
            <Button className="bg-gray-500 text-gray-300" color="" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;