import React, { Component } from 'react';
import firebase from './firebase.js';

export default class CallFirebase extends Component {
    state = {
        name: '',
        company:'',
        contractD:'',
        rawList: []
    };

    handleClick = e => {
        const contractsRef = firebase.database().ref('contracts');
        const contract = {
            name: this.state.name,
            company: this.state.company,
            contractD: this.state.contractD
        };
        contractsRef.push(contract);
    };

    componentDidMount() {
        const contractsRef = firebase.database().ref('contracts');
        contractsRef.on('value', function(snapshot) {
            const data = snapshot.val() || {};
            //this.setState({rawList: data});
            console.log(data);
        });
    }

    updateName = (evt) => {
        this.setState({
            name: evt.target.value
        });
    }    

    updateCompany = (evt) => {
        this.setState({
            company: evt.target.value
        });
    }  

    updateContractD = (evt) => {
        this.setState({
            contractD: evt.target.value
        });
    }  

    render() {
        console.log(this.state.name);
        console.log(this.state.company);
        console.log(this.state.contractD);

        return (
            <div>
                <form>
                    Name:
                    <input type="text" placeholder="Name" onChange={evt => this.updateName(evt)} />
                    Company:
                    <input type="text" placeholder="Company" onChange={evt => this.updateCompany(evt)} />
                    Contract:
                    <input type="text" placeholder="Details" onChange={evt => this.updateContractD(evt)} />
                </form>
                    <button onClick={evt => this.handleClick(evt)}> Update </button>

                <form> 
                    Data:
                    {}

                </form>
            </div>
        );
    }
}