export function getCityTimeWithTimezone(offset){

    // offset var must be in minutes
    // (The API we are using gives it in seconds)
    offset = offset / 60;

    // We create a Date object for our current location
    let d = new Date();

    // Now we convert it to msec, then subtract local time zone offset
    // SO we get the UTC time in msec
    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // We have to create a new Date object for the city we want its current hour
    // And we use the supplied offset (offset)
    let nd = new Date(utc + (3600000*offset));

    // And return it!
    return nd;
}