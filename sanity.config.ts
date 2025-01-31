import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";
import { visionTool } from "@sanity/vision";


export default defineConfig({
    projectId: "u7rfiyeh",
    dataset: "production",
    plugins: [structureTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
});