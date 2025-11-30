CREATE TABLE IF NOT EXISTS residents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    apartment TEXT NOT NULL
);

INSERT INTO residents (name, apartment) VALUES
    ('Alice Smith', '101'),
    ('Bob Johnson', '102'),
    ('Charlie Brown', '103');
