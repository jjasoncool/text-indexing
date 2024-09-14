import { MappingTypeMapping } from "@elastic/elasticsearch/lib/api/types";
import { DocAnalyzer, DocNormalizer } from "./analysis";

const docMappings: MappingTypeMapping = {
  properties: {
    doc_id: { type: "integer" },
    doc_type: { type: "keyword", normalizer: DocNormalizer.Lowercase },
    // Filter results in array fields is only available in nested objects
    // Reference: https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html
    sentences: {
      type: "nested",
      properties: {
        content: {
          type: "text",
          analyzer: DocAnalyzer.Default,
          search_analyzer: DocAnalyzer.Stop,
          search_quote_analyzer: DocAnalyzer.Default,
        },
      },
    },
  },
};

export default docMappings;
