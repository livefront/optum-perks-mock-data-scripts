export const addMockDataGuestVisits = (route: any) => {
  const currentHeaders = route.responses[0].headers;
  const sessionTokenExists = currentHeaders.find(
    (header) => header.key === "session-token"
  );
  const headersWithSessionToken = [
    ...currentHeaders,
    {
      key: "session-token",
      value: "12345678",
    },
  ];
  route.responses[0].headers = sessionTokenExists
    ? currentHeaders
    : headersWithSessionToken;
};
