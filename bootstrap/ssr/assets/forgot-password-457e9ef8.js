import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { G as GuestLayout } from "./guest-layout-4309c532.js";
import { B as Button } from "./button-685e6d97.js";
import { I as Input } from "./input-a8f11544.js";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { useForm } from "@inertiajs/react";
import "./card-561925ba.js";
import "react";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "./theme-toggle-e0614802.js";
import "./icon-9d04f58e.js";
import "@tabler/icons-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(Input, { id: "email", type: "email", name: "email", value: data.email, className: "mt-1 block w-full", autoFocus: true, onChange: (e) => setData("email", e.target.value), placeholder: "Email" }),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsx(Button, { className: "ml-4", disabled: processing, children: "Send" }) })
    ] })
  ] });
}
ForgotPassword.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { title: "Forgot Password", description: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.", children: page });
export {
  ForgotPassword as default
};
