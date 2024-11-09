import ToastProvider from "./providers/ToastProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ConfirmProvider } from "material-ui-confirm";
import { createRoot } from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "@/Layout";
import Login from "@/pages/Login";
import AuthProvider from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import UserProfile from "@/pages/UserProfile";
import { ScopePage } from "./pages/ScopePage";

const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/:scope?",
            element: <ScopePage />,
          },
          {
            path: "/profile",
            element: <UserProfile />,
          }
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <ToastProvider>
      <QueryProvider>
        <ConfirmProvider
          defaultOptions={{
            confirmationButtonProps: {
              color: "primary",
              variant: "contained",
            },
            cancellationButtonProps: {
              color: "primary",
              variant: "outlined",
            },
            dialogProps: { maxWidth: "xs" },
            title: "Biztos vagy benne?",
            confirmationText: "Igen",
            cancellationText: "Mégse",
          }}
        >
          <RouterProvider router={router} />
        </ConfirmProvider>
      </QueryProvider>
    </ToastProvider>
  </ThemeProvider>
);
