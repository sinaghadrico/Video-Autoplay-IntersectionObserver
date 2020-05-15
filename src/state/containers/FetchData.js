import { connect } from "react-redux";

import {  fetchData } from "../actions";
import FetchVideos from "../../components/FetchVideos";

const mapDispatchToProps = {
    fetchData
};

export default connect(null, mapDispatchToProps)(FetchVideos);
