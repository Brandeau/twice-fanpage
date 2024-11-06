
CREATE TABLE IF NOT EXISTS members(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    first_name_jap VARCHAR(50),
    last_name_jap VARCHAR(50),
    first_name_kor VARCHAR(50),
    last_name_kor VARCHAR(50),
    date_of_birth DATE
);

CREATE TABLE IF NOT EXISTS albums(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    release_date DATE,
    unit_id INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS units(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS tracks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL
);

ALTER TABLE albums 
    ADD CONSTRAINT fk_unit
    FOREIGN KEY(unit_id) REFERENCES units(id);

CREATE TABLE IF NOT EXISTS albums_units(
    album_id INTEGER NOT NULL,
    unit_id INTEGER NOT NULL,
    PRIMARY KEY (album_id, unit_id)
);

ALTER TABLE albums_units
    ADD CONSTRAINT fk_albums_units_album
    FOREIGN KEY(album_id) REFERENCES albums(id);

ALTER TABLE albums_units
    ADD CONSTRAINT fk_albums_units_units
    FOREIGN KEY(unit_id) REFERENCES units(id);

CREATE TABLE IF NOT EXISTS albums_tracks(
    album_id INTEGER NOT NULL,
    track_id INTEGER NOT NULL,
    PRIMARY KEY (album_id, track_id)
);

ALTER TABLE albums_tracks
    ADD CONSTRAINT fk_albums_tracks_albums
    FOREIGN KEY(album_id) REFERENCES albums(id);

ALTER TABLE albums_tracks
    ADD CONSTRAINT fk_albums_tracks_tracks
    FOREIGN KEY(track_id) REFERENCES tracks(id)