CREATE TABLE `assets` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` text,
	CONSTRAINT `assets_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` text,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
