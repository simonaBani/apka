import React from 'react';
import DatePicker from "react-datepicker";
import { setDate } from 'date-fns';


class Datumovnik extends React.Component {
    state = {
        startDate: new Date()
    }

    datumovnik = () => {
        this.setState ={
          startDate: new Date()
        };
        this.handleDate = this.handleDate.bind(this);
      }
    
      handleDate = (date) => {
        this.setState({
          startDate: date
          
        }, () =>
        console.log(this.state.startDate)
        );
      }

      render() {
          return (
              <DatePicker
                selected={this.props.value}
                onChange={this.props.handleDate}
                
                />
          );
      }
}



export default Datumovnik 



//     const [startDate, setStartDate] = useState(
    //         setHours(setMinutes(new Date(), 30), 16)
    //       );
    //       return (
    //         <DatePicker
    //           selected={startDate}
    //           onChange={date => setStartDate(date)}
    //           showTimeSelect
            
    //         dateFormat="MMMM d, yyyy h:mm aa"
    //       />
    //     );
    //   };}