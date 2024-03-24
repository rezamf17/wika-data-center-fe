import moment from 'moment'


export function IsoFormatDate(time: string, format: string) {
    let date = moment(time, format).format(format);
    return date;
}