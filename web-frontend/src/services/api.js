const BASE_URL = process.env.REACT_APP_API_URL;

export async function getResidents() {
  const res = await fetch(`${BASE_URL}/residents`);
  return res.json();
}

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
