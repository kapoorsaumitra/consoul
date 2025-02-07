"use client";
import { IconCloud } from "../../components/ui/icon-cloud";

const slugs = [
  "appier",
  "appsflyer",
  "clevertap",
  "content-full",
  "jira",
  "moengage",
  "netcore",
  "optimove",
  "salesforce",
  "servicenow",
  "smartsheet",
  "unica",
  "vtiger",
  "zoho"
];

export function ToolsCloud() {
  const images = slugs.map((slug) => `/icons/${slug}.svg`);

  return (
    <div>
      <IconCloud images={images} />
    </div>
  );
}
