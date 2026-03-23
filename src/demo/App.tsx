import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDemoStore } from './store/useDemoStore';
import { DemoLayout } from './components/DemoLayout';
import { Overview } from './pages/Overview';
import { Installation } from './pages/Installation';
import { ApiReference } from './pages/ApiReference';
import { ModalDemo } from './pages/ModalDemo';
import { ConfirmModalDemo } from './pages/ConfirmModalDemo';
import { AlertModalDemo } from './pages/AlertModalDemo';
import { LoginModalDemo } from './pages/LoginModalDemo';
import { SignupModalDemo } from './pages/SignupModalDemo';
import { ForgotPasswordModalDemo } from './pages/ForgotPasswordModalDemo';
import { ImageModalDemo } from './pages/ImageModalDemo';
import { GalleryModalDemo } from './pages/GalleryModalDemo';
import { VideoModalDemo } from './pages/VideoModalDemo';
import { FormModalDemo } from './pages/FormModalDemo';
import { EmptyStateModalDemo } from './pages/EmptyStateModalDemo';
import { LoadingModalDemo } from './pages/LoadingModalDemo';
import { BottomSheetDemo } from './pages/BottomSheetDemo';
import { DrawerDemo } from './pages/DrawerDemo';
import { Appearance } from './pages/settings/Appearance';
import { Preferences } from './pages/settings/Preferences';

export function App() {
  const { theme } = useDemoStore();

  useEffect(() => {
    // Sync theme to document element
    document.documentElement.setAttribute('data-theme', theme);
    
    // Sync favicon on initial load
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      let iconPath = '/favicons/favicon-dim.svg';
      if (theme === 'light') iconPath = '/favicons/favicon-light.svg';
      if (theme === 'dark') iconPath = '/favicons/favicon-dark.svg';
      favicon.setAttribute('href', iconPath);
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DemoLayout />}>
          <Route index element={<Overview />} />
          <Route path="installation" element={<Installation />} />
          <Route path="api-reference" element={<ApiReference />} />
          <Route path="modal" element={<ModalDemo />} />
          <Route path="confirm-modal" element={<ConfirmModalDemo />} />
          <Route path="alert-modal" element={<AlertModalDemo />} />
          <Route path="login-modal" element={<LoginModalDemo />} />
          <Route path="signup-modal" element={<SignupModalDemo />} />
          <Route path="forgot-password" element={<ForgotPasswordModalDemo />} />
          <Route path="image-modal" element={<ImageModalDemo />} />
          <Route path="gallery-modal" element={<GalleryModalDemo />} />
          <Route path="video-modal" element={<VideoModalDemo />} />
          <Route path="form-modal" element={<FormModalDemo />} />
          <Route path="empty-state" element={<EmptyStateModalDemo />} />
          <Route path="loading-modal" element={<LoadingModalDemo />} />
          <Route path="bottom-sheet" element={<BottomSheetDemo />} />
          <Route path="drawer" element={<DrawerDemo />} />
          <Route path="settings/appearance" element={<Appearance />} />
          <Route path="settings/preferences" element={<Preferences />} />
          <Route path="*" element={<Overview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
