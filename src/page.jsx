import React, { useState, useEffect, useRef } from "react";
import "./TabComponent.css"; // 스타일을 위한 CSS 파일

import tab1 from "./assets/images/tab1.png";
import tab2 from "./assets/images/tab2.png";
import tab3 from "./assets/images/tab3.png";

const initialTabs = [
    { id: 1, label: "탭1", content: [
            { text: "탭 1의 첫 번째 내용입니다s.", image: tab1 },
            { text: "탭 1의 두 번째 내용입니다.", image: tab1 },
            { text: "탭 1의 세 번째 내용입니다.", image: tab1 },
            { text: "탭 1의 첫 번째 내용입니다s.", image: tab1 },
            { text: "탭 1의 두 번째 내용입니다.", image: tab1 },
            { text: "탭 1의 세 번째 내용입니다.", image: tab1 },
            { text: "탭 1의 첫 번째 내용입니다s.", image: tab1 },
            { text: "탭 1의 두 번째 내용입니다.", image: tab1 },
            { text: "탭 1의 세 번째 내용입니다.", image: tab1 },
            { text: "탭 1의 첫 번째 내용입니다s.", image: tab1 },
            { text: "탭 1의 두 번째 내용입니다.", image: tab1 },
            { text: "탭 1의 세 번째 내용입니다.", image: tab1 },
            { text: "탭 1의 첫 번째 내용입니다s.", image: tab1 },
            { text: "탭 1의 두 번째 내용입니다.", image: tab1 },
            { text: "탭 1의 세 번째 내용입니다.", image: tab1 },
            { text: "탭 1의 첫 번째 내용입니다s.", image: tab1 },
            { text: "탭 1의 두 번째 내용입니다.", image: tab1 },
            { text: "탭 1의 세 번째 내용입니다.", image: tab1 },
        ] },
    { id: 2, label: "탭2", content: [
            { text: "탭 2의 첫 번째 내용입니다.", image: tab2 },
            { text: "탭 2의 두 번째 내용입니다.", image: tab2 },
            { text: "탭 2의 세 번째 내용입니다.", image: tab2 }
        ] },
    { id: 3, label: "탭3", content: [
            { text: "탭 3의 첫 번째 내용입니다.", image: tab3 },
            { text: "탭 3의 두 번째 내용입니다.", image: tab3 },
            { text: "탭 3의 세 번째 내용입니다.", image: tab3 }
        ] },
];

const TabComponent = () => {
    const [tabs, setTabs] = useState(initialTabs);
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="tab-container" style={{ width: "90%", margin: "auto", maxHeight: "800px" }}>
            <div className="tab-header" style={{ borderBottom: "none", display: "flex", fontSize: "1.5rem", padding: "20px 0" }}>
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                        style={{ padding: "20px 30px", cursor: "pointer" }}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="tab-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "1.2rem", width: "100%" }}>
                {tabs.map((tab) =>
                    activeTab === tab.id ? (
                        <div key={tab.id} className="content-section" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "90%" }}>
                            {tab.content.map((item, index) => (
                                <div key={index} className="content-item" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "20px", width: "100%", minHeight: "350px" }}>
                                    <img src={item.image} alt={`내용 이미지 ${index + 1}`} className="content-image" style={{ width: "300px", height: "300px", objectFit: "cover", flexShrink: 0 }} />
                                    <p style={{ flexGrow: 1, wordBreak: "break-word", fontSize: "1.2rem", textAlign: "left", margin: 0 }}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default TabComponent;