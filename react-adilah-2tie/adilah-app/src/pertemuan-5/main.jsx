// import TailwindCSS from "./TailwindCSS";
// import UserForm  from "./UserForm";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import HitungGajiForm from "./HitungGajiForm";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <HitungGajiForm/>
        </div>
    )
    {/* <TailwindCSS/> */}
    {/* <UserForm/> */}