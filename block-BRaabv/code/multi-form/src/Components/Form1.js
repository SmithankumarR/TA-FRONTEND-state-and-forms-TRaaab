import React from 'react';

class Form1 extends React.Component {
    constructor(props){
        super(props);
        this.state({

        })
    }
    render(){
        return (
            <section>
            <h3>Step 1/3</h3>
            <h1 className="heading">Sign Up</h1>
            <form >
                <fieldset>
                    <label htmlFor="name">First Name</label>
                    <input type="text" name="firstName" />
                </fieldset>

            </form>
          </section>
        )
    }
}

export default Form1;