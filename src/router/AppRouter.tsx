import { Route, Routes } from "react-router-dom"
import { MuColombia, MuHome, MuMexico } from "../modules"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<MuHome />} />
                <Route index element={<MuHome />} />
                <Route path="/colombia" element={<MuColombia />} />
                <Route path="/mexico" element={<MuMexico />} />
                <Route path="/*" element={<h1>404 not found</h1>} />
            </Routes>
        </>
    )
}
