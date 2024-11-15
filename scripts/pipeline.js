#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Configure logging
function log(message, isError = false) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}`;
  if (isError) {
    console.error(logMessage);
  } else {
    console.log(logMessage);
  }
}

// Execute a command and handle errors
function executeStep(command, description) {
  log(`Starting: ${description}`);
  try {
    execSync(command, {
      stdio: "inherit",
      env: { ...process.env, FORCE_COLOR: true },
    });
    log(`Completed: ${description}`);
  } catch (error) {
    log(`Failed: ${description}`, true);
    log(error.message, true);
    process.exit(1);
  }
}

// Main pipeline function
async function runPipeline() {
  log("Starting pipeline execution");

  executeStep("npm run create-mockoon", "Create Mockoon JSON env");

  executeStep("npm run api-types", "Generate API Types");

  executeStep("npm run write-data", "Write additonal JSON data");

  executeStep("npm run add-rules", "Add Rules to display examples with dynamic paths");

  executeStep("npm run update-env", "Tweak Mockoon Env");

  log("Pipeline completed successfully");
}
process.on("uncaughtException", (error) => {
  log("Uncaught Exception:", true);
  log(error.message, true);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  log("Unhandled Rejection:", true);
  log(error.message, true);
  process.exit(1);
});
runPipeline().catch((error) => {
  log("Pipeline failed:", true);
  log(error.message, true);
  process.exit(1);
});
