import React from "react";
import "@testing-library/jest-dom";

class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

const i18nMock = {
  language: "pl",
  changeLanguage: () => new Promise(() => {}),
};

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: i18nMock,
  }),
  withTranslation: () => (Component) => (props) => (
    <Component t={(key) => key} i18n={i18nMock} {...props} />
  ),
  initReactI18next: { type: "3rdParty", init: () => {} },
}));
