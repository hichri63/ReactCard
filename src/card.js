import React from 'react';
import ReactDom from 'react-dom';



class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "####",
            date: "####",
            code: "####",
        }
        
    }
        validThru = (e) =>{
            this.setState({[e.target.name]: e.target.value})
        }
    render() {
        var tes1 = /^[0-9\b]+$/
        return (<div>
            <div>
                <img className='imageCard' src="http://www.infomerchant.net/images/help/visa-large.gif" />
                <p>
                  { this.state.name.toUpperCase().padEnd(7,'#')}
                </p>
                <p>
                {tes1.test(this.state.date) ? this.state.date.padEnd(4, "").replace(/^(\d{2})/, '$1 / ') : "**/*"} 
                </p>
                <p>
                    
                    {tes1.test(this.state.code) ? (this.state.code).replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '') : "### ## ## ##"}
                </p>
            </div>




            <div>

                <input type="text" name="name" onChange={this.validThru}></input>
                <input type="text" name="date" onChange={this.validThru}></input>
                <input type="text" name="code" onChange={this.validThru}></input>
            </div>
        </div>

        )

    }
}
export default Card




