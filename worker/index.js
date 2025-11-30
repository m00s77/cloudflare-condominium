import * as service from "./services/residentsService.js";

export default {
  async fetch(request, env) {
    const DB = env.DB;
    const url = new URL(request.url);
    const { pathname } = url;

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",       // ✅ allow all origins (dev)
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle CORS preflight request
    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (pathname.startsWith("/residents")) {
      if (request.method === "GET") {
        const residents = await service.getResidents(DB);
        return new Response(JSON.stringify(residents), { headers });
      }

      if (request.method === "POST") {
        const { name, apartment } = await request.json();
        await service.addResident(DB, name, apartment);
        return new Response(JSON.stringify({ message: "Resident added" }), { headers });
      }

      if (request.method === "PUT") {
        const { id, name, apartment } = await request.json();
        await service.updateResident(DB, id, name, apartment);
        return new Response(JSON.stringify({ message: "Resident updated" }), { headers });
      }

      if (request.method === "DELETE") {
        const { id } = await request.json();
        await service.deleteResident(DB, id);
        return new Response(JSON.stringify({ message: "Resident deleted" }), { headers });
      }
    }

    return new Response(JSON.stringify({ message: "Not Found" }), { status: 404, headers });
  },
};
