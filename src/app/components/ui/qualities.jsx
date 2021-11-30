import React from "react";

import { useQualities } from "../../hooks/useQualities";
import PropTypes from "prop-types";

const Qualities = ({ qualities }) => {
    const { getQuality } = useQualities();
    const qualName = qualities.map((el) => {
        return getQuality(el);
    });
    return <p>{qualName.map((el) => el.name)}</p>;
};

Qualities.propTypes = {
    qualities: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default Qualities;
