import { useState } from "react";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Incident } from "./incident";

// Importing the newly created components
import TopBox from "./components/topBox/TopBox";
import CallHistoryDetails from "./components/topBox/callHistoryDetails";
import MissedCalls from "./components/chartBox/MissedCalls";
import OutgoingCalls from "./components/chartBox/OutgoingCalls";
import CallLog from "./components/chartBox/CallLog";
import Contacts from "./components/Contacts";
import FrequentCallDetector from "./components/FrequentCallDetector";
import CallTypeAnalysis from "./components/CallTypeAnalysis";
import CallDurationAnalysis from "./components/CallDurationAnalysis";
import Resources from "./components/Training";
import Recording from "./components/CallQualityAnalysis";
import CallRisk from "./components/CallRiskAnalysis.tsx";
import CallSentiment from "./components/CallSentiment.tsx";
import CallTranscript from "./components/CallTranscript.tsx";
import CallerBehavior from "./components/CallerBehaviourReport.tsx";
import IncidentReport from "./components/IncidentReport.tsx";
import ViewQuery from "./components/ReportDisplay.tsx";
import CompilanceReport from "./components/ComplianceReport.tsx";
import CallTagReport from "./components/CallTagReport.tsx";
import CustomerFeedback from "./components/CustomerFeedback.tsx";
import CustomerFeedbackReport from "./components/FeedbackReport.tsx";
import CallAcceptReject from "./components/CallAcceptedRejectedReport";
import CallBack from "./components/CallConversionReport.tsx";
import CallSrc from "./components/CallSrc.tsx";
import Sentigen from "./components/sentigen.tsx";
import ChatBot from "./components/chatgen.tsx";
import Chat from "./components/chat.tsx";

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    role: string;
  } | null>(null);

  const handleIncidentEdit = (incident: Incident) => {
    // Handle incident edit here
    console.log('Incident edited:', incident);
  };

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet context={{ setUser }} />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/call-history",
          element: <TopBox />,
        },
        {
          path: "/call-history-details",
          element: <CallHistoryDetails />,
        },
        {
          path: "/missed-calls",
          element: <MissedCalls />,
        },
        {
          path: "/outgoing-calls",
          element: <OutgoingCalls />,
        },
        {
          path: "/call-log",
          element: <CallLog />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/frequent-call-detector",
          element: <FrequentCallDetector />,
        },
        {
          path: "/call-type-analysis",
          element: <CallTypeAnalysis />,
        },
        {
          path: "/call-duration-analysis",
          element: <CallDurationAnalysis />,
        },
        {
          path: "/resources",
          element: <Resources />,
        },
        {
          path: "/recording-quality-analysis",
          element: <Recording />,
        },
        {
          path: "/call-risk-analysis",
          element: <CallRisk />,
        },
        {
          path: "/call-sentiment-analysis",
          element: <CallSentiment />,
        },
        {
          path: "/call-transcript",
          element: <CallTranscript />,
        },
        {
          path: "/caller-behavior",
          element: <CallerBehavior />,
        },
        {
          path: "/incident-reporting",
          element: <IncidentReport onEdit={handleIncidentEdit} />,
        },
        {
          path: "/view-query",
          element: <ViewQuery onEdit={handleIncidentEdit} />,
        },
        {
          path: "/compilance-detector",
          element: <CompilanceReport />,
        },
        {
          path: "/call-tags-report",
          element: <CallTagReport />,
        },
        {
          path: "/view-customer-feedback",
          element: <CustomerFeedback />,
        },
        {
          path: "/customer-feedback",
          element: <CustomerFeedbackReport />,
        },
        {
          path: "/call-accept-reject",
          element: <CallAcceptReject />,
        },
        {
          path: "/call-back",
          element: <CallBack />,
        },
        {
          path: "/call-recordings",
          element: <CallSrc />,
        },
        {
          path: "/senti-gen",
          element: <Sentigen />,
        },
        {
          path: "/chat-bot",
          element: <ChatBot />,
        },
        {
          path: "/chats",
          element: <Chat />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login setUser={setUser} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
