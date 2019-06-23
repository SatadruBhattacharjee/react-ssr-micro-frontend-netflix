
import React from "react";
import TrendingMovies from './TrendingMovies';
import NetflixOriginals from './NetflixOriginals';
import TopRated from './TopRated';
import ActionMovies from './ActionMovies';
import ComedyMovies from './ComedyMovies';
import HorrorMovies from './HorrorMovies';
import RomanceMovies from './RomanceMovies';
import Documentaries from './Documentaries';

export default function ListingContent() {
    return (
        <div>
            <NetflixOriginals />
            <TrendingMovies />
            <TopRated />
            <ActionMovies />
            <ComedyMovies />
            {/* <HorrorMovies /> */}
            <Documentaries />
        </div>
    );
}
