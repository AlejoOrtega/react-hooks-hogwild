import React, {useState} from 'react';

const Form = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        name:'',
        specialty:'',
        weight:'',
        'highest medal achieved':'',
        image: '',
        isGreased: false

    })
    //const [name, specialty, weight, image, isGreased]= formData
    const handleOnChange = (e) => {
        if(e.target.name === 'isGreased'){
            setFormData({...formData, [e.target.name]: !formData.isGreased})
        }else{
            setFormData({...formData, [e.target.name]:e.target.value})
        }
        
    }

    const onSubmitData=(e)=>{
        e.preventDefault();
        onSubmit(formData)
        setFormData({
            name:'',
            specialty:'',
            weight:'',
            'highest medal achieved':'',
            image: '',
            isGreased: false
    
        })
    }
    return ( 
    <form className="ui form center" onSubmit={onSubmitData}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleOnChange}/>
        </div>
        <div className="field">
          <label>Specialty</label>
          <input type="text" name="specialty" placeholder="specialty" value={formData.specialty} onChange={handleOnChange}/>
        </div>
        <div className="field">
          <label>Weight</label>
          <input type="text" name="weight" placeholder="weight" value={formData.weight} onChange={handleOnChange}/>
        </div>
        <div className="field">
          <label>Highest medal achieved</label>
          <input type="text" name="highest medal achieved" placeholder="highest medal achieved" value={formData['highest medal achieved']} onChange={handleOnChange}/>
        </div>
        <div className="field">
          <label>Image</label>
          <input type="text" name="image" placeholder="Image" value={formData.image} onChange={handleOnChange}/>
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" name='isGreased' checked={formData.isGreased} onChange={handleOnChange}/>
            <label>Is greased?</label>
          </div>
        </div>
        <button className="ui button" type="submit">Submit</button>
    </form>
     );
}
 
export default Form;