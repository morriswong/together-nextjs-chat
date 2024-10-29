import type { NextConfig } from "next";

if (!process.env.TOGETHER_API_KEY) {
  console.error(
    "Error: The TOGETHER_API_KEY environment variable must be defined. Add it to your .env file.\n",
  );
  process.exit(1);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
