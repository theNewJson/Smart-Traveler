import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Day from '../components/Day'
import { updateFocusDay } from '../actions';


const styles = theme => ({
    scheduleContainer:{

    },
  });

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }
  calculateDate(props){
    let startDate = new Date(props.days[0].startDate);
    let endDate = new Date(props.days[0].endDate);
    //console.log(props.days.startDate);
    //console.log((endDate-startDate)/(24*3600*1000));
    return (endDate-startDate)/(24*3600*1000) + 1
  }
<<<<<<< HEAD
  focus(){
    
=======
  focus(dayID){
    console.log(dayID);
    this.props.actions(dayID);
>>>>>>> 2d7f39f429426f86ba7437012ea9c70022a81c0b
  }
  render() {
    const {classes} = this.props;
    return (
      <Grid container>
        <Grid item xs={12} className={classes.scheduleContainer}>
          <h3>Schedule</h3>
            {[...Array(this.calculateDate(this.props))].map(
              (e , i) => {return <Day dayID={i+1} key={'day' + i + 1} schedule={this.props.schedule} onFocus={this.focus}></Day>}
            )}
        </Grid>
      </Grid>
    )
  }
}
ScheduleContainer.propTypes = {
    classes: PropTypes.object.isRequired,
}


function mapStateToProps(state){
  return {
    days: state.dateIntervalReducer,
    schedule: state.locationReducer
  }
}
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(updateFocusDay, dispatch)
  }
}
/* function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addCounter, dispatch) }
} */
//export default connect(mapDispatchToProps)(DatePicker);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ScheduleContainer));