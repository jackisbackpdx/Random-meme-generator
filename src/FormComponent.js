import React from 'react';
import Form from './FormContainer';

function FormComponent(props) {
    return (
        <main>
            <form>
                <input type='text' placeholder='First Name' name='firstName' value={props.firstName} onChange={props.handleChange}/><br/>
                <input type='text' placeholder='Last Name' name='lastName' value={props.lastName} onChange={props.handleChange}/><br/>
                <input type='number' placeholder='Age' name='age' value={props.age} onChange={props.handleChange}/><br/>
                <label>
                    Sex:
                    <br/>
                    <label>
                        Male
                        <input
                        name='gender'
                        onChange={props.handleChange}
                        type='radio'
                        value='male'
                        checked={props.gender === 'male'}
                        />
                        </label>
                    <label>
                        Female
                        <input
                        name='gender'
                        onChange={props.handleChange}
                        type='radio'
                        value='female'
                        checked={props.gender === 'female'}
                        />
                    </label>
                    <br/>

                    <label>
                        Location: 
                        <select onChange={props.handleChange} value={props.destination} name='destination'>
                            <option value=''>-- Please Choose a destination --</option>
                            <option value={'United States'}>United States</option>
                            <option value={'Canada'}>Canada</option>
                            <option value={'Mexico'}>Mexico</option>
                            <option value={'Europe'}>Europe</option>
                        </select>
                    </label>

                    <label className='diet'>
                        <p>Dietary Restrictions</p>
                        <br/>
                        <label>
                            Dairy
                            <input type='checkbox' name={'dairy'} checked={props.dairy} onChange={props.handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Seafood
                            <input type='checkbox' name={'seafood'} checked={props.seafood} onChange={props.handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Gluten
                            <input type='checkbox' name={'gluten'} checked={props.gluten} onChange={props.handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Penut
                            <input type='checkbox' name={'penut'} checked={props.penut} onChange={props.handleChange}/>
                        </label>
                        <br/>
                    </label>
                </label>
            </form>
            <hr/>
            <h2>Entered Information:</h2>
            <p>Your name: {props.firstName} {props.lastName}</p>
            <p>Your age: {props.age}</p>
            <p>Your gender: {props.gender}</p>
            <p>Your destination: {props.destination}</p>
            <p>Your dietary restrictions:</p>
            <p>Dairy: {props.dairy ? 'Yes' : 'No' }</p>
            <p>Seafood: {props.seafood ? 'Yes' : 'No'}</p>
            <p>Gluten: {props.gluten ? 'Yes' : 'No' }</p>
            <p>Penut: {props.penut ? 'Yes' : 'No'}</p>
        </main>
    )
}

export default FormComponent