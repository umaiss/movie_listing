export type RootStackParamList = {
    MainTabs: undefined;
    MovieDetail: { id: number };
    VideoScreen: { id: string };
    SeatBooking: { videoUrl: string; movieTitle?: string };
    SeatBookingDetail: { movieTitle: string; showTime: string; hall: string; date: string };
};

export type BottomTabParamList = {
    Dashboard: undefined;
    Watch: undefined;
    Library: undefined;
    More: undefined;
};