import React, { useEffect, useState } from "react";
import {
  getResidents,
  addResident,
  updateResident,
  deleteResident,
} from "../services/api";

export default function ResidentsTable() {
  const [residents, setResidents] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", apartment: "" });

  useEffect(() => {
    fetchResidents();
  }, []);

  const fetchResidents = async () => setResidents(await getResidents());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) await updateResident(form.id, form.name, form.apartment);
    else await addResident(form.name, form.apartment);
    setForm({ id: null, name: "", apartment: "" });
    fetchResidents();
  };

  const handleEdit = (res) => setForm(res);
  const handleDelete = async (id) => {
    await deleteResident(id);
    fetchResidents();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4 row g-2">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Apartment"
            value={form.apartment}
            onChange={(e) => setForm({ ...form, apartment: e.target.value })}
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            {form.id ? "Update" : "Add"}
          </button>
        </div>
      </form>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Apartment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((res) => (
            <tr key={res.id}>
              <td>{res.name}</td>
              <td>{res.apartment}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(res)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(res.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
