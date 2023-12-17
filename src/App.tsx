import {useState, useEffect} from "react"
import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { HomePage } from "./components/HomePage";
import { Box } from "@mui/material";
import { Footer } from "./components/Footer";
import { PageContentWrapper } from "./components/shared/PageContentWrapper";

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [bannerTextColor, setBannerTextColor] = useState('white'); // Set the initial color

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    const bannerElement = document.getElementById('homepage-banner');

    if (bannerElement) {
      const bannerRect = bannerElement.getBoundingClientRect();
      const isPastBanner = bannerRect.bottom <= 0;

      // Update banner color based on whether the entire banner is outside the viewport
      setBannerTextColor(isPastBanner ? 'black' : 'white');
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <Box bgcolor={"neutral.light"} position="relative">
      <NavigationBar bannerTextColor={bannerTextColor}/>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Box
        bottom={0}
        left={0}
        borderTop={"1px solid"}
        borderColor={"#d3d3d3"}
        id={"footer"}
      >
        <PageContentWrapper>
          <Footer />
        </PageContentWrapper>
      </Box>
    </Box>
  );
}

export default App;
