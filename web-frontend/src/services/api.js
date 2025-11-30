const BASE_URL = "http://127.0.0.1:8787"; // Local Wrangler dev

export const getResidents = async () =>
  (await fetch(`${BASE_URL}/residents`)).json();

export const addResident = async (name, apartment) =>
  fetch(`${BASE_URL}/residents`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, apartment }),
  });

export const updateResident = async (id, name, apartment) =>
  fetch(`${BASE_URL}/residents`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name, apartment }),
  });

export const deleteResident = async (id) =>
  fetch(`${BASE_URL}/residents`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
