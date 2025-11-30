export async function query(DB, sql, params = []) {
    const result = await DB.prepare(sql).bind(...params).all();
    return result.results;
  }
  
  export async function addResident(DB, name, apartment) {
    await query(DB, "INSERT INTO residents (name, apartment) VALUES (?, ?)", [
      name,
      apartment,
    ]);
  }
  
  export async function getResidents(DB) {
    return await query(DB, "SELECT * FROM residents");
  }
  
  export async function updateResident(DB, id, name, apartment) {
    await query(DB, "UPDATE residents SET name = ?, apartment = ? WHERE id = ?", [
      name,
      apartment,
      id,
    ]);
  }
  
  export async function deleteResident(DB, id) {
    await query(DB, "DELETE FROM residents WHERE id = ?", [id]);
  }
  