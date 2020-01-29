import React ,{Component}from 'react';
import './App.css';
import {connect} from 'react-redux';
import moment from 'moment';
import  {add_Reminder,remove_Reminder,clear_Reminder } from './actions/index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import reminderimg from './imgs/Reminders-icon.png'



class App extends Component {
  state={
    text:'',
    date:new Date()
  }
  render (){
    let {reminders}=this.props;
    let remindersitem =reminders.map(item=>{
      return(
        <div key={item.id} className="reminder-item text-left bg-white p-4 position-relative mt-2">
          
          <p className="item-desc"> {item.text}</p>
          <span className="d-inline-block p-2 item-time"> {moment(new Date(item.date)).fromNow()}</span>
          <button className="remove btn btn-danger position-absolute rounded-circle" onClick={()=>this.props.remove_Reminder(item.id)}>x</button>
        </div>
      )
    })
    return (
      <div className="App text-uppercase ">
        <div className="container "> 
          <div className="img-con w-25 m-auto">
            <img src={reminderimg} alt="" className="mw-100"/>
          </div>
          <div className="titel text-white  ">
          <h2 className="text-blod">What should u do ?</h2>
          </div>
          <div className="form mt-2 mb-2">
            <input type="text" className="form-control" placeholder="enter what you think ..." onChange={(e)=>this.setState({text:e.target.value})} value={this.state.text} />
            {/* <input type="datetime-local"  className="form-control" onChange={(e)=>this.setState({date:e.target.value})}  value={this.state.date} /> */}
            <DatePicker
                className="form-control "
                placeholder="Enter Date"
                value={this.state.date}
                selected={this.state.date}
                onChange={date => this.setState({date})}
                showTimeSelect
                timeFormat="HH:mm"
                
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
    />
            <button className="btn btn-primary btn-block" onClick={()=>{this.props.add_Reminder(this.state.text,this.state.date)
                                                                        this.setState({text:"", date:""}) }}>Add Reminder</button>
            <button className="btn btn-danger btn-block" onClick={this.props.clear_Reminder}>Clear Reminder</button>
          </div>

          <div>
            {remindersitem}
          </div>
          
        
        </div>
        
      
      </div>
    );
  }
}

// function mapDispatchToProps (dispatch){
//   return{
//     add:()=>dispatch(add_Reminder())
//   }

// }

// function mapStateToProps (state){
//   return{
//     reminders:state
//   }

// }

export default connect( state=>{
  return{
    reminders:state
  }
}, {add_Reminder,remove_Reminder,clear_Reminder}) (App);
