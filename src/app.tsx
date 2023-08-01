//TODO: Add an error boundary
//TODO: make a "Section" component for all the content sections (Maybe)
//TODO: update ProjectOverview component to take content as props and have a function to generate bulleted lists.
//TODO: update project page to accept props for content with option for Project Demo or Project Gallery.
//TODO: sort out navbar on scroll events

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
// import ProjectPage from "./components/common/ProjectPage.tsx/ProjectPage";
import Vermelho from "./pages/projects/Vermelho";
import Calculator from "./pages/projects/Calculator";
import { NavLinkProvider } from "./contexts/NavLinkContext/NavLinkContext";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import WordMasters from "./pages/projects/WordMasters";
import TimeStamp from "./pages/projects/TimeStamp";
import HeaderParser from "./pages/projects/HeaderParser";
import UrlShortener from "./pages/projects/UrlShortener";
import ExerciseTracker from "./pages/projects/ExerciseTracker";
import FileMetadata from "./pages/projects/FileMetadata";
import UtilityShed from "./pages/projects/UtilityShed";
import CubeCobra from "./pages/projects/CubeCobra";
import ScrollToSection from "./components/common/ScrollToSection/ScrollToSection";

//Default Query Client
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//       cacheTime: Infinity,
//     },
//   },
// });

const App = () => {
  return (
    <div>
      <StrictMode>
        <BrowserRouter>
          {/* <QueryClientProvider client={queryClient}> */}

          <NavLinkProvider>
            <ScrollToTop />
            <ScrollToSection />
            <Routes>
              {/* <Route path="/" element={<Layout> {...sections}</Layout>}></Route> */}

              {/* <Route path="/projects/*" element={<ProjectPage />}></Route> */}
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                {/* <Route path="/projects/*" element={<ProjectPage />}></Route> */}
                <Route path="/projects/vermelho-game" element={<Vermelho />} />
                <Route
                  path="/projects/utility-shed"
                  element={<UtilityShed />}
                />
                <Route path="/projects/calculator" element={<Calculator />} />
                <Route
                  path="/projects/word-masters"
                  element={<WordMasters />}
                />
                <Route path="/projects/cube-cobra" element={<CubeCobra />} />
                <Route
                  path="/projects/timestamp-microservice"
                  element={<TimeStamp />}
                />
                <Route
                  path="/projects/header-parser-microservice"
                  element={<HeaderParser />}
                />
                <Route
                  path="/projects/url-shortener-microservice"
                  element={<UrlShortener />}
                />
                <Route
                  path="/projects/exercise-tracker-microservice"
                  element={<ExerciseTracker />}
                />
                <Route
                  path="/projects/file-metadata-microservice"
                  element={<FileMetadata />}
                />
              </Route>

              {/* <Route path="/somePage/:id" element={<SomePageContainer />} /> */}
            </Routes>
          </NavLinkProvider>

          {/* </QueryClientProvider> */}
        </BrowserRouter>
      </StrictMode>
    </div>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("No container to render to. Location App.tsx");
}

const root = createRoot(container);
root.render(<App />);
