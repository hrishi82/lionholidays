import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { HomePage } from "./components/HomePage";
import { AboutUs } from "./components/AboutUs";
import { Events } from "./components/Events";
import { Members } from "./components/Members";
import { ContactUs } from "./components/ContactUs";
import { Box } from "@mui/material";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Box bgcolor={"neutral.light"} position="relative">
      <NavigationBar />

      <Box m={"auto"} maxWidth={"1024px"} pt={25} px={2}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Box>

      <Box bottom={0} left={0} bgcolor={"secondary.dark"}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
