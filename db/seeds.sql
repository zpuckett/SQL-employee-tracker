USE employee_db;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Production");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("A&R");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Sales Associate", 100000, 1),
("Engineer/Producer", 150000, 2),
("Financial Analyst", 180000, 3),
("Accountant", 230000, 3),
("Artist Management", 120000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Bill", "White", 1, 3),
("Mike", "Brown", 2, 1),
("Jeff", "Blue", 3, null),
("Aaron", "Green", 4, 3),
("Zach", "Grey", 5, null),
("Linda", "Black", 2, null),
("Victoria", "Red", 4, 7),
("Ellen", "Lavender", 1, 2);