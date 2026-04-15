import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkList from "./FrameworkList"
import FrameworkListSearchFilter from "./FrameworkListSearchFIlter";
import ResponsiveDesign from "./ResponsiveDesign";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            <FrameworkListSearchFilter/>
            <ResponsiveDesign/>
        </div>
    )