import "express-async-errors";
import winston from "winston";

(() => {
    winston.addColors({
        error: "red",
        warn: "yellow",
        info: "white",
        success: "green",
    });

    winston.exceptions.handle(
        new winston.transports.File({ filename: "logger/exceptions.log" })
    );

    winston.add(
        new winston.transports.File({
            filename: "logger/error.log",
            level: "error",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.simple()
            ),
        })
    );

    if (process.env.NODE_ENV === "local") {
        winston.add(
            new winston.transports.Console({
                format: winston.format.combine(
                    winston.format.colorize({ all: true }),
                    winston.format.simple()
                ),
            })
        );
    }
})();
