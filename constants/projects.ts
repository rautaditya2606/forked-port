import { Icons } from "@/components/icons";
import { SITE } from "@/constants/site";
import type {
  Project,
  ProjectSource,
  ProjectSourceOption,
} from "@/types/projects";

export const HOME_FEATURED_PROJECT_COUNT = 6 as const;

export const PROJECT_SOURCES = [
  {
    image: SITE.AUTHOR.AVATAR,
    label: "Personal",
    value: "personal",
  },
  {
    icon: Icons.github,
    label: "Open Source",
    value: "open-source",
  },
] as const satisfies readonly ProjectSourceOption[];

export const DEFAULT_PROJECT_SOURCE: ProjectSource = "personal";

export const PROJECTS = [
  // Personal Projects
  {
    category: "Tool",
    date: {
      month: "March",
      year: 2026,
    },
    description:
      "High-performance distributed LLM inference framework partitioning Hugging Face transformers across N heterogeneous GPUs via neural speculative decoding and zero-copy Rust TCP relay (28.10 peak TPS).",
    featured: true,
    links: {
      github: "https://github.com/rautaditya2606/Shardflow",
    },
    slug: "shardflow",
    source: "personal",
    title: "ShardFlow",
  },
  {
    category: "Tool",
    date: {
      month: "February",
      year: 2026,
    },
    description:
      "Observability and diagnostics engine for Haystack 2.x RAG pipelines with document-store validation, retrieval-failure analysis, and MCP support.",
    featured: true,
    links: {
      github: "https://github.com/rautaditya2606/haystack-diagnostics",
    },
    slug: "haystack-diagnostics",
    source: "personal",
    title: "Haystack Diagnostics Engine",
  },
  {
    category: "Tool",
    date: {
      month: "December",
      year: 2025,
    },
    description:
      "Framework-dependent quantization stability audit across 14,154 images, restoring MobileNetV3 INT8 accuracy to 82.5% on Jetson Nano at 54.5 FPS (Research Preprint).",
    featured: true,
    links: {
      github: "https://github.com/rautaditya2606/wheat_detection",
    },
    slug: "agricultural-edge-ai-quantization",
    source: "personal",
    title: "Agricultural Edge AI Quantization",
  },
  {
    category: "Product",
    date: {
      month: "January",
      year: 2026,
    },
    description:
      "End-to-end wheat disease classification system using ConvNeXt-Tiny (88.46% accuracy, 0.9896 AUC) with INT8 ONNX quantization and human-in-the-loop feedback.",
    featured: true,
    links: {
      github: "https://github.com/rautaditya2606/wheat_detection",
    },
    slug: "wheat-disease-intelligence",
    source: "personal",
    title: "Wheat Disease Intelligence Platform",
  },
  {
    category: "Product",
    date: {
      month: "November",
      year: 2025,
    },
    description:
      "Real-time retail sales prediction engine powered by ONNX-quantized XGBoost, hybrid Apache Kafka streaming (SSL + REST proxy fallback), and 1 Hz continuous observability.",
    featured: true,
    links: {
      github: "https://github.com/rautaditya2606/Rossman-Deployed",
      website: "https://rossman-deployed-xxk0.onrender.com",
    },
    slug: "rossman-sales-prediction",
    source: "personal",
    title: "Rossmann Sales Prediction",
  },

  // Open Source Contributions (8 Haystack + 1 LlamaIndex)
  {
    category: "Open Source",
    date: {
      month: "June",
      year: 2026,
    },
    description:
      "Prevented DocumentLanguageClassifier crashes on blob-only documents by replacing uncaught TypeError with graceful unmatched fallback.",
    featured: true,
    links: {
      github: "https://github.com/deepset-ai/haystack/pull/11419",
    },
    slug: "haystack-document-language-classifier",
    source: "open-source",
    title: "DocumentLanguageClassifier Blob Fallback (PR #11419)",
  },
  {
    category: "Open Source",
    date: {
      month: "June",
      year: 2026,
    },
    description:
      "Fixed silent split_idx_start metadata corruption in RecursiveDocumentSplitter when split_unit='word'/'token' with overlap enabled.",
    featured: true,
    links: {
      github: "https://github.com/deepset-ai/haystack/pull/11711",
    },
    slug: "haystack-recursive-splitter-idx",
    source: "open-source",
    title: "RecursiveDocumentSplitter Metadata Fix (PR #11711)",
  },
  {
    category: "Open Source",
    date: {
      month: "June",
      year: 2026,
    },
    description:
      "Fixed split_overlap being silently ignored on no-separator fallback path in RecursiveDocumentSplitter.",
    featured: true,
    links: {
      github: "https://github.com/deepset-ai/haystack/pull/11768",
    },
    slug: "haystack-recursive-splitter-overlap",
    source: "open-source",
    title: "RecursiveDocumentSplitter Overlap Fallback (PR #11768)",
  },
  {
    category: "Open Source",
    date: {
      month: "June",
      year: 2026,
    },
    description:
      "Preserved fallback chains in FallbackChatGenerator lost during to_dict() serialization roundtrip.",
    featured: true,
    links: {
      github: "https://github.com/deepset-ai/haystack/pull/11847",
    },
    slug: "haystack-fallback-chat-generator",
    source: "open-source",
    title: "FallbackChatGenerator Serialization Fix (PR #11847)",
  },
  {
    category: "Open Source",
    date: {
      month: "June",
      year: 2026,
    },
    description:
      "Restored split_idx_start metadata consistency in EmbeddingBasedDocumentSplitter across all split configurations.",
    featured: true,
    links: {
      github: "https://github.com/deepset-ai/haystack/pull/11987",
    },
    slug: "haystack-embedding-splitter-idx",
    source: "open-source",
    title: "EmbeddingBasedDocumentSplitter Consistency (PR #11987)",
  },
  {
    category: "Open Source",
    date: {
      month: "June",
      year: 2026,
    },
    description:
      "Fixed auto-variadic socket flag not reset on component removal in PipelineBase.remove_component.",
    featured: true,
    links: {
      github: "https://github.com/deepset-ai/haystack/pull/12206",
    },
    slug: "haystack-pipeline-variadic-socket",
    source: "open-source",
    title: "PipelineBase Auto-Variadic Socket Reset (PR #12206)",
  },
  {
    category: "Open Source",
    date: {
      month: "June",
      year: 2026,
    },
    description:
      "Corrected inverted isinstance check in PipelineBase.__eq__ that raised unhandled AssertionError when comparing to non-Pipeline types.",
    featured: true,
    links: {
      github: "https://github.com/deepset-ai/haystack/pull/12387",
    },
    slug: "haystack-pipeline-equality-check",
    source: "open-source",
    title: "PipelineBase.__eq__ Inverted Type Check (PR #12387)",
  },
  {
    category: "Open Source",
    date: {
      month: "June",
      year: 2026,
    },
    description:
      "Fixed AzureOpenAIChatGenerator.to_dict() crash when response_format is a plain dict by adding missing isinstance type guard before issubclass call.",
    featured: true,
    links: {
      github: "https://github.com/deepset-ai/haystack/pull/12407",
    },
    slug: "haystack-azure-chat-generator-dict",
    source: "open-source",
    title: "AzureOpenAIChatGenerator Type Guard (PR #12407)",
  },
  {
    category: "Open Source",
    date: {
      month: "June",
      year: 2026,
    },
    description:
      "Corrected stopword removal and token boundary preservation in SemanticDoubleMergingSplitterNodeParser.",
    featured: true,
    links: {
      github: "https://github.com/run-llama/llama_index/pull/22167",
    },
    slug: "llamaindex-double-merging-splitter",
    source: "open-source",
    title: "SemanticDoubleMergingSplitter Stopword Fix (PR #22167)",
  },
] satisfies readonly Project[];
