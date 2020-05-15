import { connect } from "react-redux";

import Videos from "../../components/videos";

const mapStateToProps = (state) => {
  console.log("DataContainer->mapStateToProps", state);
  return {
    ...state.dataReducer
  };
};

export default connect(mapStateToProps)(Videos);
