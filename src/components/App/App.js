import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../css/reset.css"
import "../../css/styles.css"
import Home from "../Home/Home";
import Page_2 from "../Page_2/Page_2";




export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/page_2" element={<Page_2 />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}