import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "../index.css";
import Creatable from "react-select/creatable";
const tags = [
  { label: "A", value: 1 },
  { label: "B", value: 2 },
  { label: "C", value: 3 },
  { label: "D", value: 4 },
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
};

// import { colourOptions } from 'react-form';

const IdeaCreate = () => {
  const [content, setContent] = useState("Content");
  const [title, setTitle] = useState("Title");
  const [tag, setTag] = useState("Select");
  const [agree, setAgree] = useState(false);
  const animatedComponents = makeAnimated();
  const [tagValue, settagValue] = useState("");
  const handleChange = (field, value) => {
    switch (field) {
      case "tags":
        settagValue(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="ideacreate">
      <h2>Create idea</h2>
      <form>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Content</label>
          <input
            className="idea-content"
            type="textarea"
            name="content"
            placeholder="content"
            rows="4"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />

        {/* (VyPNK) tag dropdown select */}
        <div className="select-form">
          <div className="input">
            <label>Tag(s)</label>
            <Creatable
              isClearable
              isMulti
              onChange={(value) => handleChange("tags", value)}
              options={tags}
              value={tagValue}
              styles={customStyles}
            />
          </div>
        </div>

        <br />
        {/* <div>
                    <label>Upload</label>
                    <input type="file"
                    accept="image/*"
                    id="contained-button-file">
                    </input>
                </div> */}

        {/* Terms and Conditions */}
        <div>
          <h3>Terms and Conditions</h3>
          <div className="term-conditions">
            Et natus molestias et doloribus. Quis quae enim dolores dolores
            aperiam ullam eaque. Eveniet aut et qui alias consequuntur expedita
            consequatur aspernatur. Qui est ut modi aut ut. Non est dolor ipsum
            numquam doloribus deserunt molestiae et animi. Voluptatem sint fuga
            est eum.
          </div>
        </div>
        <br />

        {/* (VyPNK) Term & condition select + Submit */}
        <div className="agree-check">
          <input
            type="checkbox"
            name="agreement"
            onChange={(e) => setAgree(e.target.value)}
          />
          I Agree with Terms & Conditions
        </div>

        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default IdeaCreate;
