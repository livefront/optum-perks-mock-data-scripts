/**
 * Sets the `headers` object to allow all header types and all origins. This is important
 * for the `create-image` endpoint that uses a unique header type.
 */
export const setAccessControlHeaders = (mockServerData: any) => {
  const headersConfig = [
    { key: "Access-Control-Allow-Headers", value: "*" },
    { key: "Access-Control-Allow-Origin", value: "*" },
  ];
  const headersConfigAlreadySet =
    mockServerData.headers.includes(headersConfig[0]) &&
    mockServerData.headers.includes(headersConfig[1]);

  if (headersConfigAlreadySet) return;

  mockServerData.headers.push(...headersConfig);
};
