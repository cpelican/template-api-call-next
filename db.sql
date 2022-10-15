DROP TABLE IF EXISTS test_table;
CREATE TABLE test_table(
    id SERIAL primary key not null,
    description varchar(10)
);
INSERT INTO test_table (description) VALUES('foo');
INSERT INTO test_table (description) VALUES('bar');
