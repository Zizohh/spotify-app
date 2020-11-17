export const initialState = {
	user: null,
	playlists: [""],
	playing: false,
	item: null,
	// REMOVE AFTER FINISH DEVELOPING
	// token:
	// 	"BQByv3V9cyRFmhr3WSwXaFXjCs-ptmB99GuIzvIMT_G9SPbyX01w-qmi2qCEUXTAj6OdshZDFaCyEHGv-SxBNPZZBGdU_ZGZAB0bUpB7Jo1sXuVHI92KUX5fwuwvF8zToi-JtpD0L_LgV5aBPY5ptx_nV6b9uqLoSxwjOchpGVYDTMLG",
};

const reducer = (state, action) => {
	console.log(action);

	// Action --> type, [payload]

	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};
		default:
			return state;
	}
};

export default reducer;
