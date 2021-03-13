import React from "react";
import PropTypes from "prop-types";
import "../css/CustomNode.css";

const propTypes = {
    nodeData: PropTypes.object.isRequired
};

const OrgNode = ({ nodeData }) => {
    return (
        <div>
            <div className="orgid">{nodeData.orgId}</div>
            <div className="orgtitle">{nodeData.orgTitle}</div>
            <div className="orgmanager">{nodeData.manager}</div>
            <div className="orgchildren">{nodeData.children}</div>
            <div className="orgmembers">{nodeData.members}</div>
        </div>
    );
};

OrgNode.propTypes = propTypes;

export default OrgNode;