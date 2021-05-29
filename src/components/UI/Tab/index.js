import React, { useState, useEffect } from "react";

import "./Tab.scss";

const Tab = ({ modifier, children }) => {
  const { defaultTab } = modifier;
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);

  const tabs = children.map((child, index) => (
    <div
      key={index}
      onClick={() => setActiveTab(child.props.tabid)}
      className={`tab-header-list ${
        child.props.tabid === activeTab ? "tab-header-list-active" : ""
      } width--100 text-center p--0-5`}
    >
      <h5 className="text-size--16 mb--0">{child.props.label}</h5>
    </div>
  ));

  const tabContent = children.filter(
    (child) => child.props.tabid === activeTab
  );

  return (
    <div className="tab-body">
      <div className="tab-header d--flex">{tabs}</div>
      <div className="tab-content">{tabContent}</div>
    </div>
  );
};

Tab.defaultProps = {
  modifier: {},
  children: null,
};

export default Tab;
