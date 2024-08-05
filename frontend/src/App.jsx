import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { ContextWrapper } from "@/AuthContext";
import PrivateRoute, {
  AdminRoute,
  ManagerRoute,
} from "@/components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "@/pages/Login";
import OnboardingFlow from "@/pages/OnboardingFlow";
import i18n from "./i18n";

import { PfpProvider } from "./PfpContext";
import { LogoProvider } from "./LogoContext";
import { FullScreenLoader } from "./components/Preloader";

const Main = lazy(() => import("@/pages/Main"));
const InvitePage = lazy(() => import("@/pages/Invite"));
const WorkspaceChat = lazy(() => import("@/pages/WorkspaceChat"));
const AdminUsers = lazy(() => import("@/pages/Admin/Users"));
const AdminInvites = lazy(() => import("@/pages/Admin/Invitations"));
const AdminWorkspaces = lazy(() => import("@/pages/Admin/Workspaces"));
const AdminSystem = lazy(() => import("@/pages/Admin/System"));
const AdminLogs = lazy(() => import("@/pages/Admin/Logging"));
const AdminAgents = lazy(() => import("@/pages/Admin/Agents"));
const GeneralChats = lazy(() => import("@/pages/GeneralSettings/Chats"));
const GeneralAppearance = lazy(
  () => import("@/pages/GeneralSettings/Appearance")
);
const GeneralApiKeys = lazy(() => import("@/pages/GeneralSettings/ApiKeys"));
const GeneralLLMPreference = lazy(
  () => import("@/pages/GeneralSettings/LLMPreference")
);
const GeneralTranscriptionPreference = lazy(
  () => import("@/pages/GeneralSettings/TranscriptionPreference")
);
const GeneralAudioPreference = lazy(
  () => import("@/pages/GeneralSettings/AudioPreference")
);
const GeneralEmbeddingPreference = lazy(
  () => import("@/pages/GeneralSettings/EmbeddingPreference")
);
const EmbeddingTextSplitterPreference = lazy(
  () => import("@/pages/GeneralSettings/EmbeddingTextSplitterPreference")
);
const GeneralVectorDatabase = lazy(
  () => import("@/pages/GeneralSettings/VectorDatabase")
);
const GeneralSecurity = lazy(() => import("@/pages/GeneralSettings/Security"));
const WorkspaceSettings = lazy(() => import("@/pages/WorkspaceSettings"));
const EmbedConfigSetup = lazy(
  () => import("@/pages/GeneralSettings/EmbedConfigs")
);
const EmbedChats = lazy(() => import("@/pages/GeneralSettings/EmbedChats"));
const PrivacyAndData = lazy(
  () => import("@/pages/GeneralSettings/PrivacyAndData")
);
const ExperimentalFeatures = lazy(
  () => import("@/pages/Admin/ExperimentalFeatures")
);
const LiveDocumentSyncManage = lazy(
  () => import("@/pages/Admin/ExperimentalFeatures/Features/LiveSync/manage")
);
const FineTuningWalkthrough = lazy(() => import("@/pages/FineTuning"));

export default function App() {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <ContextWrapper>
        <LogoProvider>
          <PfpProvider>
            <I18nextProvider i18n={i18n}>
              <Routes>
                <Route path="/" element={<PrivateRoute Component={Main} />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/workspace/:slug/settings/:tab"
                  element={<ManagerRoute Component={WorkspaceSettings} />}
                />
                <Route
                  path="/workspace/:slug"
                  element={<PrivateRoute Component={WorkspaceChat} />}
                />
                <Route
                  path="/workspace/:slug/t/:threadSlug"
                  element={<PrivateRoute Component={WorkspaceChat} />}
                />
                <Route path="/accept-invite/:code" element={<InvitePage />} />

                {/* Admin */}
                <Route
                  path="/settings/llm-preference"
                  element={<AdminRoute Component={GeneralLLMPreference} />}
                />
                <Route
                  path="/settings/transcription-preference"
                  element={
                    <AdminRoute Component={GeneralTranscriptionPreference} />
                  }
                />
                <Route
                  path="/settings/audio-preference"
                  element={<AdminRoute Component={GeneralAudioPreference} />}
                />
                <Route
                  path="/settings/embedding-preference"
                  element={
                    <AdminRoute Component={GeneralEmbeddingPreference} />
                  }
                />
                <Route
                  path="/settings/text-splitter-preference"
                  element={
                    <AdminRoute Component={EmbeddingTextSplitterPreference} />
                  }
                />
                <Route
                  path="/settings/vector-database"
                  element={<AdminRoute Component={GeneralVectorDatabase} />}
                />
                <Route
                  path="/settings/agents"
                  element={<AdminRoute Component={AdminAgents} />}
                />
                <Route
                  path="/settings/event-logs"
                  element={<AdminRoute Component={AdminLogs} />}
                />
                <Route
                  path="/settings/embed-config"
                  element={<AdminRoute Component={EmbedConfigSetup} />}
                />
                <Route
                  path="/settings/embed-chats"
                  element={<AdminRoute Component={EmbedChats} />}
                />
                {/* Manager */}
                <Route
                  path="/settings/security"
                  element={<AdminRoute Component={GeneralSecurity} />}
                />
                <Route
                  path="/settings/privacy"
                  element={<AdminRoute Component={PrivacyAndData} />}
                />
                <Route
                  path="/settings/appearance"
                  element={<AdminRoute Component={GeneralAppearance} />}
                />
                <Route
                  path="/settings/beta-features"
                  element={<AdminRoute Component={ExperimentalFeatures} />}
                />
                <Route
                  path="/settings/api-keys"
                  element={<AdminRoute Component={GeneralApiKeys} />}
                />
                <Route
                  path="/settings/workspace-chats"
                  element={<AdminRoute Component={GeneralChats} />}
                />
                <Route
                  path="/settings/system-preferences"
                  element={<ManagerRoute Component={AdminSystem} />}
                />
                <Route
                  path="/settings/invites"
                  element={<AdminRoute Component={AdminInvites} />}
                />
                <Route
                  path="/settings/users"
                  element={<AdminRoute Component={AdminUsers} />}
                />
                <Route
                  path="/settings/workspaces"
                  element={<AdminRoute Component={AdminWorkspaces} />}
                />
                {/* Onboarding Flow */}
                <Route path="/onboarding" element={<OnboardingFlow />} />
                <Route path="/onboarding/:step" element={<OnboardingFlow />} />

                {/* Experimental feature pages  */}
                {/* Live Document Sync feature */}
                <Route
                  path="/settings/beta-features/live-document-sync/manage"
                  element={<AdminRoute Component={LiveDocumentSyncManage} />}
                />

                <Route
                  path="/fine-tuning"
                  element={<AdminRoute Component={FineTuningWalkthrough} />}
                />
              </Routes>
              <ToastContainer />
            </I18nextProvider>
          </PfpProvider>
        </LogoProvider>
      </ContextWrapper>
    </Suspense>
  );
}
