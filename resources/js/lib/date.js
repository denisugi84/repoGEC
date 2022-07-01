import moment from "moment";

function indonesianDate(my_date, type) {

    // return my_date

    // return my_date[2] + my_date[1] + my_date[0];
    if(!my_date) {
        return false
    }

    let str = my_date;
    let date = moment(str);

    if(type) {
        if(type == 'time') {
            return date.format('H:mm')

        } else if(type == 'datetime') {
            return date.format('D MMMM YYYY H:mm')
        }
    } else {
        return date.format('D MMMM YYYY')
    }


}

export default indonesianDate;