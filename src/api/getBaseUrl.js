import axios, { isAxiosError } from "axios";

export const getBaseUrl = axios.create({
  baseURL:
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464",
});

export const parseApiError = (error) => {
  let message = "Unknown network error";

  if (isAxiosError(error)) {
    message = error.message;
  }

  return { message };
};

// headers: { "Content-Type": "application/json" },
