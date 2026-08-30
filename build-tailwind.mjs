import { spawnSync } from "node:child_process";

const result = spawnSync(
  process.execPath,
  ["./node_modules/@tailwindcss/cli/dist/index.mjs", "-i", "./tailwind-input.css", "-o", "./dist/output.css"],
  {
    stdio: "inherit",
    shell: false
  }
);

process.exit(result.status ?? 1);