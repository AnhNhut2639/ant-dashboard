import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";
const Homepage = lazy(() => import("./pages/homepage"));
const AntD = lazy(() => import("./pages/antd"));
const AntdTable = lazy(() => import("./pages/antd-table"));
const AntdTableSelect = lazy(() => import("./pages/antd-table-select"));
const AntdIcons = lazy(() => import("./pages/icons"));
const AntdEdit = lazy(() => import("./pages/antd-table-edit"));
const AntdSearch = lazy(() => import("./pages/antd-table-search"));
const AntdForm = lazy(() => import("./pages/antd-form"));
const AntdUploaded = lazy(() => import("./pages/antd-upload"));
const AntdMenu = lazy(() => import("./pages/antd-menu"));
const AntdTabs = lazy(() => import("./pages/antd-tab"));
const AntdCarousel = lazy(() => import("./pages/antd-carousel"));
const AntdDependentDropdown = lazy(() => import("./pages/depent-dropdown"));
const AntdCustomTheme = lazy(() => import("./pages/custom-theme"));
const NotFound = lazy(() => import("./pages/not-found"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/antdesign" element={<AntD />} />
          <Route path="/antd-table" element={<AntdTable />} />
          <Route path="/antd-table-select" element={<AntdTableSelect />} />
          <Route path="/antd-icons" element={<AntdIcons />} />
          <Route path="/antd-edit" element={<AntdEdit />} />
          <Route path="/antd-table-search" element={<AntdSearch />} />
          <Route path="/antd-form" element={<AntdForm />} />
          <Route path="/antd-upload" element={<AntdUploaded />} />
          <Route path="/antd-menu" element={<AntdMenu />} />
          <Route path="/antd-tabs" element={<AntdTabs />} />
          <Route path="/antd-carousel" element={<AntdCarousel />} />
          <Route path="/dependent" element={<AntdDependentDropdown />} />
          <Route path="/custom-theme" element={<AntdCustomTheme />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
