import React,{ useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Button } from "reactstrap";
import dummyData from "../dummy-data";
import TopicContainer from "./TopicContainer";
import "./Searchbox.css"


export default function SearchBox(){
 const [ searchData,setSearchData ] = useState([]);
 const [ formState, setformState ] = useState ({ searchtext: "" });
 const [ errors, setErrors ] = useState({ searchtext: "" });
 const [ buttonDisabled, setButtonDisabled ] = useState(true);

 const formSchema = yup.object().shape({ 
     searchtext: yup.string().required("Cannot search empty")
 });

 useEffect(()=>{
     formSchema.isValid(formState).then((valid)=>{
         console.log("Is the form Valid?", valid);
         setButtonDisabled(!valid);
     });
 },[formState]);

const validate =(event) =>{
    yup
    .reach (formSchema, event.target.name)
    .validate(event.target.value)
    .then((validate)=>{
        setErrors({...errors, [event.target.name]:""})
    })
    .catch((error)=>{
        setErrors({...errors,[event.target.name]:error.errors[0]});
    });
};

const inputChange = (event) => {
    event.persist();
    const newFormState = {...formState,[event.target.name]:event.target.value};
    validate(event);
    setformState(newFormState);
};
 console.log(dummyData);
const searchSubmit = (event) => {
    event.preventDefault();
    //console.log(formState.searchtext);
    setSearchData(dummyData.filter(data => data.title.toLowerCase().includes(formState.searchtext))); 
}
    return(

        <div>
            <Link to="/">
				<Button color='primary' size="lg">Home</Button>
			</Link>
       
            <form onSubmit={searchSubmit}>
                <label htmlFor = "searchtext">
                Insert Text
                <br/>
                <input id="searchtext" type="text" name="searchtext" value={formState.searchtext} onChange={inputChange} />
                { errors.searchtext.length > 0 ? <p>{errors.searchtext}</p> : null }
                </label>
                <br/>
                <Button color="success"size="lg"type="submit" disabled={buttonDisabled}>Search</Button>            
            </form>   
        <TopicContainer data={searchData}/>
        </div>      
            
    );
}

