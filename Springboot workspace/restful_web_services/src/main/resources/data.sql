CREATE TABLE todo (
    id BIGINT PRIMARY KEY,
    username VARCHAR(20),
    description VARCHAR(60),
    target_date DATE,
    is_done BOOLEAN
);
insert into todo(id, username, description, targeet_date, is_done)
values(10001, 'user1', 'learn java', now(), false);
insert into todo(id, username, description, targeet_date, is_done)
values(10002, 'user2', 'learn jpa', now(), false);
insert into todo(id, username, description, targeet_date, is_done)
values(10003, 'user3', 'learn hibernate', now(), false);