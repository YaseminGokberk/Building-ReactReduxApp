import React from "react";
import { connect} from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import propTypes from "prop-types";
class CoursesPage extends React.Component{ 
        state = {
            course:{
                title: ""
            }
        }      
    
    handleChange = event => {
        const course = {...this.state.course, title: event.target.value};
        this.setState({ course});
    }
    handleSubmit  = event => {        
        event.preventDefault();
        debugger;
        this.props.dispatch(courseActions.createCourse(this.state.course))
       
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title}></input>
                <input type="submit" value="Save"/>

                {this.props.courses.map(course => (
    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        );
    }
}

CoursesPage.propTypes = {
    courses : propTypes.array.isRequired,
    dispatch: propTypes.func.isRequired
}
//What state is pass to our component via props
function mapStateToProps(state){
    debugger;
    return{
        Courses : state.courses
    }
}
// declare what actions to pass to our component on props 
//function mapDispatchToProps()

//connect returns a function and then calls our component
export default connect(mapStateToProps) (CoursesPage)