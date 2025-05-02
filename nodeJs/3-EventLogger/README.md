# Memory Logger

This Node.js script logs the system's free memory percentage to a file (`eventLog.txt`) every 3 seconds using a custom event-based logger.

## Features

- Custom `Logger` class based on `EventEmitter`
- Logs events with timestamps
- Appends logs to a file `eventLog.txt`
- Automatically logs memory usage every 3 seconds

## Prerequisites

- Node.js installed on your system

## Installation

No external packages are required. Only Node.js built-in modules are used.

## How to Use

1. Save the following code in a file, for example: `logger.js`

```js
const fs = require("fs");
const os = require("os");
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logFile = "./eventLog.txt";

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message}\n`;
  fs.appendFileSync(logFile, logMessage);
};

logger.on("message", logToFile);

setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current memory is:${memoryUsage.toFixed(2)}`);
}, 3000);

logger.log("Application started");
```

2. Run the script using:

```bash
node logger.js
```

3. Check the `eventLog.txt` file in the same directory for output logs.

## Example Output in `eventLog.txt`

```
2025-05-02T12:00:00.000Z - Application started
2025-05-02T12:00:03.001Z - Current memory is:45.67
2025-05-02T12:00:06.001Z - Current memory is:45.71
...
```

## Notes

- This script uses `fs.appendFileSync` for simplicity. For better performance, especially with high-frequency logging, consider using an async or streaming approach.
- You can stop the script anytime with `Ctrl + C`.
