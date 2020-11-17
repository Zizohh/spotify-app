import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCirclefilleIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/FavoriteSharp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useDataLayerValue();
	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body_info">
				<img src={discover_weekly?.images[0]?.url} alt="" />
				<div className="body_infoText">
					<strong>PLAYLIST</strong>
					<h2>Discover weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>
			<div className="body_songs">
				<div className="body_icons">
					<PlayCirclefilleIcon className="body_shuffle" />
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				{discover_weekly?.tracks.items.map((item) => (
					<SongRow track={item.track} />
				))}
			</div>
		</div>
	);
}

export default Body;
