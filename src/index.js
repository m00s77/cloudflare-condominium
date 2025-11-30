export default {
  async fetch(request) {
    return new Response("Hello from Condominium!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
