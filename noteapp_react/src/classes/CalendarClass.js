export class CalendarClass {
    
    constructor() {}

    weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    splitted_data_array = []
    today_is_the_weekday
    current_month

    currentDate =  new Date()

    getCurrentDate() {
        return this.currentDate
    }

}