// Implement and Type Enum-Style Objects in TypeScript

enum HTTPRequestMethod {
  GET = "GET",
  POST = "POST",
}

async function fetchJSON(url: string, method: HTTPRequestMethod) {
  const response = await fetch(url, { method });
  return response.json();
}

fetchJSON("https://example.com/", HTTPRequestMethod.GET).then((data) => {
  // ...
});
