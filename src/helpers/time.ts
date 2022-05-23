export const calculateDuration = (durationInSeconds: number) => {
    let hours: string | number = Math.floor((durationInSeconds / (60 * 60)));
    let minutes: string | number = Math.floor((durationInSeconds % (60 * 60)) / 60);
    let seconds: string | number = Math.floor((durationInSeconds % (60 * 60)) % 60);

    if (hours < 10) { 
        hours = `0${hours}`
    }

    if (minutes < 10) { 
        minutes = `0${minutes}`
    }

    if (seconds < 10) { 
        seconds = `0${seconds}`
    }

    return `${hours}:${minutes}:${seconds}`

    
}