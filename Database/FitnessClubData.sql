USE cdacproject;
-- Insert into user Table
INSERT INTO `user` (`email`, `password`, `role`) VALUES
('user@trainer1.com', 'password', 'TRAINER'),
('user@trainer2.com', 'password', 'TRAINER'),
('user@trainer3.com', 'password', 'TRAINER'),
('user@manager1.com', 'password', 'MANAGER'),
('user@manager2.com', 'password', 'MANAGER'),
('user@manager3.com', 'password', 'MANAGER');

-- Insert into branch Table
INSERT INTO `branch` (`state`, `branch_name`, `city`, `locality`, `phone_no`, `zip_code`) VALUES
('MAHARASHTRA', 'PSYC', 'SATARA', 'POWAINAKA', 1234567890, '415001'),
('MAHARASHTRA', 'JUST FIT', 'SATARA', 'RAJWADA', 9876543210, '415001'),
('MAHARASHTRA', 'GOLDY', 'PUNE', 'RAWET', 1122334455, '415002'),
('MAHARASHTRA', 'FITNESS HUB', 'PUNE', 'HINJAWADI', 6677889900, '415002');

-- Insert into trainer Table
INSERT INTO `trainer` (`address`, `dob`, `email`, `first_name`, `last_name`, `password`, `phone_no`, `role`, `branch_id`, `user_id`) VALUES
('SATARA', '1995-02-15', 'user@trainer1.com', 'Michael', 'Johnson', 'password', 3333333333, 'TRAINER', 1, 1),
('SATARA', '1988-09-20', 'user@trainer2.com', 'Sarah', 'Brown', 'password', 4444444444, 'TRAINER', 2, 2),
('PUNE', '1990-05-10', 'user@trainer3.com', 'Mathew', 'Green', 'password', 5555555555, 'TRAINER', 3, 3);


-- Insert into manager Table
INSERT INTO `manager` (`address`, `dob`, `email`, `first_name`, `last_name`, `password`, `phone_no`, `role`, `branch_id`, `user_id`) VALUES
('SATARA', '1990-01-01', 'user@manager1.com', 'John', 'Doe', 'password', 1111111111, 'MANAGER', 1, 4),
('SATARA', '1985-05-10', 'user@manager2.com', 'Jane', 'Smith', 'password', 2222222222, 'MANAGER', 2, 5),
('PUNE', '1970-03-18', 'user@manager3.com', 'Aliana', 'Deff', 'password', 3333333333, 'MANAGER', 3, 6);

-- Insert into packages Table
INSERT INTO `packages` (`description`, `package_name`, `package_price`, `branch`) VALUES
('ADVANCE', 'WEIGHT TRAINING', 20000, 1),
('INTERMEDIATE', 'STRENGTH TRAINING', 15000, 1),
('BEGINEER', 'CARDIO', 10000, 1),
('ADVANCE', 'WEIGHT TRAINING', 20000, 2),
('INTERMEDIATE', 'STRENGTH TRAINING', 15000, 2),
('BEGINEER', 'CARDIO', 10000, 2),
('ADVANCE', 'WEIGHT TRAINING', 20000, 3),
('INTERMEDIATE', 'STRENGTH TRAINING', 15000, 3),
('BEGINEER', 'CARDIO', 10000, 3);


-- Insert into batch Table
INSERT INTO `batch` (`batch_time`, `batch_type`, `branch`) VALUES
('06:00:00', 'Morning', 1),
('06:00:00', 'Evening', 1),
('06:00:00', 'Morning', 2),
('06:00:00', 'Evening', 2),
('06:00:00', 'Morning', 3),
('06:00:00', 'Evening', 3);


