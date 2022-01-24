// import Search from "../../components/Search.js";
import Search from "./Search";
import { Link } from "react-router-dom";
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import EditableRow from "./EditableRow.js";
import ReadOnlyRow from "./ReadOnlyRow.js";
import "../../index.css";
import { IconButton } from "@mui/material";
import { MdAdd } from "react-icons/md";

import { useStyles } from "./styles";

const IdeaList = () => {
  const classes = useStyles;

  const [ideas, setIdeas] = useState(data);
  const [addFormData, setAddFormData] = useState({
    department: "",
    tags: "",
    title: "",
    content: "",
  });

  const [editFormData, setEditFormData] = useState({
    department: "",
    tags: "",
    title: "",
    content: "",
  });

  const [editIdeaId, setEditIdeaId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldId = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldId] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldId = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldId] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newIdea = {
      id: nanoid(),
      department: addFormData.department,
      tags: addFormData.tags,
      title: addFormData.title,
      content: addFormData.content,
    };

    const newIdeas = [...ideas, newIdea];
    setIdeas(newIdeas);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedIdea = {
      id: editIdeaId,
      department: editFormData.department,
      tags: editFormData.tags,
      title: editFormData.title,
      content: editFormData.content,
    };

    const newIdeas = [...ideas];

    const index = ideas.findIndex((idea) => idea.id === editIdeaId);

    newIdeas[index] = editedIdea;

    setIdeas(newIdeas);
    setEditIdeaId(null);
  };

  const handleEditClick = (event, idea) => {
    event.preventDefault();
    setEditIdeaId(idea.id);

    const formValues = {
      department: idea.department,
      tags: idea.tags,
      title: idea.title,
      content: idea.content,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditIdeaId(null);
  };

  const handleDeleteClick = (ideaId) => {
    const newIdeas = [...ideas];

    const index = ideas.findIndex((idea) => idea.id === ideaId);

    newIdeas.splice(index, 1);

    setIdeas(newIdeas);
  };
  const handleThumbUpClick = (ideaId) => {};
  const handleThumbDownClick = (ideaId) => {};
  return (
    <div className="idealist">
      <Search />

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Department</th>
              <th>Tags</th>
              <th>Title</th>
              <th>Content</th>
              <th>Actions</th>
              <th>Thumbs</th>
            </tr>
          </thead>
          <tbody>
            {ideas.map((idea) => (
              <Fragment>
                {editIdeaId === idea.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    key={idea.id}
                  />
                ) : (
                  <ReadOnlyRow
                    idea={idea}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    key={idea.id}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add an idea</h2>
      <form className={classes.root} onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="department"
          required="required"
          placeholder="Enter a department..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="tags"
          required="required"
          placeholder="Enter tags..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="content"
          required="required"
          placeholder="Enter content..."
          onChange={handleAddFormChange}
        />
        <IconButton
          color="primary"
          aria-label="add"
          component="span"
          size="large"
        >
          <MdAdd />
        </IconButton>
      </form>
    </div>

    // {/* 1. Title: ‘Idea List’
    // 2. Pagination (5 per page)
    // 3. Search idea
    // 4. Records are shown with the following column:
    // Idea ID
    // Title
    // Department
    // Content
    // Time Stamp
    // 5. Thumbs up/down
    // 6. Tags
    // 7. View Idea Detail
    // 8. Create idea
    // 9. Create Closure Date for new ideas
    // */}

    // {/* <IdeaCreate /> */}
  );
};

export default IdeaList;
