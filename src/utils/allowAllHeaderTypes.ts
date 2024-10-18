/**
 * Sets the `headers` object to allow all header types. This is important
 * for the `create-image` endpoint that uses a unique header type.
 */
export const allowAllHeaderTypes = (mockServerData: any) => {
  const allowAllHeadersConfig = {
    key: "Access-Control-Allow-Headers",
    value: "*",
  };
  const headersConfigAlreadySet = mockServerData.headers.find(
    (header) => header.key === allowAllHeadersConfig.key
  );

  if (headersConfigAlreadySet) return;

  mockServerData.headers.push(allowAllHeadersConfig);
};
