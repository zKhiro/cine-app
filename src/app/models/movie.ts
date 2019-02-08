export interface Movie {
    id:             number;
    poster:         string;
    title:          string;
    synopsis:       string;
    // director:       string;
    genres:         string[];
    rating:         string;
    schedules: {
        weekDays:       string[],
        time:           string[],
        is3D:           boolean,
    }[];

}
