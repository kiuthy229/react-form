import { useState} from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// import { colourOptions } from 'react-form';


const IdeaCreate = () => {
    const [content, setContent] = useState("Content");
    const [title, setTitle] = useState("Title");
    const [tag, setTag] = useState("Select");
    const [agree, setAgree] = useState(false);
    const animatedComponents = makeAnimated();
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return ( 
        <div className="ideacreate">
            <h2>Create idea</h2>
            <form>
                <div>
                    <label>Title: </label>
                    <input type="text" name="title" placeholder="title" onChange={e => setContent(e.target.value)} />
                </div>

                <div>
                    <label>Content</label>
                    <input className="idea-content" type="textarea" name="content" placeholder="content" rows ="4" onChange={e => setTitle(e.target.value)} />
                </div>
                <br/>

                {/* (VyPNK) tag dropdown select */}
                <div>
                    <label>Tags</label>
                    <Select class="tag" name="tag"
                            closeMenuOnSelect={false} 
                            placeholder={tag} 
                            
                            components={animatedComponents}
                            isMulti
                            options={options}/>
                    {/* //custom add more tags */}
                </div>
                <br/>

                {/* <div>
                    <label>Upload</label>
                    <input type="file"
                    accept="image/*"
                    id="contained-button-file">
                    </input>
                </div> */}

                

                {/* Terms and Conditions */}
                <div>
                    <h3>
                        Terms and Conditions
                    </h3>
                    <div>
                        Et natus molestias et doloribus. Quis quae enim dolores dolores aperiam ullam eaque. Eveniet aut et qui alias consequuntur expedita consequatur aspernatur. Qui est ut modi aut ut. Non est dolor ipsum numquam doloribus deserunt molestiae et animi. Voluptatem sint fuga est eum.
                    </div>
                </div>
                <br/>

                
                <br/>

                {/* (VyPNK) Term & condition select + Submit */}
                <div>
                    <input
                        type="checkbox"
                        name="agreement"
                        onChange={e => setAgree(e.target.value)} />
                    I Agree with Terms & Conditions
                </div>

                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default IdeaCreate;