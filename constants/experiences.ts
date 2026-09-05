import type { Experience } from "@/types/experiences";

export const EXPERIENCES = [
  {
    category: "GenAI / ML",
    experienceDescription: [
      "<u>RAG Modernization:</u> Migrated RAG pipeline to Haystack 2.x; cut latency by 40% and token costs by 60% via context windowing.",
      "<u>BYODB Platform:</u> Implemented BYODB support, enabling secure integration of Weaviate, Qdrant, Pinecone, and Chroma.",
      "<u>Federated Multi-DB RAG:</u> Built a multi-tenant retrieval layer with parallel querying, connection pooling, and RRF score fusion across heterogeneous vector databases.",
      "<u>Ingestion:</u> Parallelized ingestion pipeline with ThreadPoolExecutor; reduced batch processing time by 61% (70s → 27s).",
    ],
    experienceLinks: {
      linkedin: "https://www.linkedin.com/company/allcognix-ai/",
      website: "https://allcognix.ai/",
    },
    experienceOrg: {
      link: "https://allcognix.ai/",
      name: "AllCognix AI",
      websiteDisplayName: "allcognix.ai",
    },
    experienceStatus: {
      endAt: "Present",
      startAt: "Nov, 2025",
    },
    experienceTech: [
      "Python",
      "Haystack",
      "FastAPI",
      "Weaviate",
      "Qdrant",
      "Pinecone",
      "Chroma",
      "Docker",
      "PostgreSQL",
      "Git",
    ],
    experienceTitle: "Generative AI Engineer Intern",
    orgDescription:
      "AllCognix AI specializes in enterprise generative AI platforms, intelligent search architectures, and multi-tenant RAG systems.",
    slug: "allcognix-ai",
  },
  {
    category: "GenAI / ML",
    experienceDescription: [
      "<u>Multimodal AI Content Generator:</u> Built an AI-powered web platform that dynamically converts user prompts into structured documents (PDF, DOC, PPT), synthesized images, and code snippets.",
      "<u>Intelligent Search & Retrieval:</u> Integrated Serper and SERP search APIs with LangChain orchestration to trigger on-demand web search and deep context-aware synthesis in real-time.",
      "<u>Full Stack Architecture:</u> Engineered resilient microservices using Python, FastAPI, Node.js, Express.js, and Anthropic Claude APIs with real-time streaming feedback.",
      "<u>Web Scraping & Prompt Optimization:</u> Developed automated web scraping pipelines and specialized prompt engineering workflows for high-precision, context-tailored multi-format document export.",
    ],
    experienceLinks: {
      website: "https://ai4chat.co",
    },
    experienceOrg: {
      link: "https://ai4chat.co",
      name: "AI4Chat",
      websiteDisplayName: "ai4chat.co",
    },
    experienceStatus: {
      endAt: "Oct, 2025",
      startAt: "Apr, 2025",
    },
    experienceTech: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "LangChain",
      "Anthropic",
      "JavaScript",
      "Git",
    ],
    experienceTitle: "Full Stack & GenAI Intern",
    orgDescription:
      "AI4Chat builds multi-modal generative AI applications, search engines, and document intelligence platforms.",
    slug: "ai4chat",
  },
  {
    category: "Open Source",
    experienceDescription: [
      "Prevented DocumentLanguageClassifier crashes on blob-only documents by replacing uncaught TypeError with graceful unmatched fallback (Haystack PR #11419).",
      "Fixed silent split_idx_start metadata corruption in RecursiveDocumentSplitter when split_unit='word'/'token' with overlap enabled (Haystack PR #11711).",
      "Fixed split_overlap being silently ignored on no-separator fallback path in RecursiveDocumentSplitter (Haystack PR #11768).",
      "Preserved fallback chains in FallbackChatGenerator lost during to_dict() serialization roundtrip (Haystack PR #11847).",
      "Restored split_idx_start metadata consistency in EmbeddingBasedDocumentSplitter across all split configurations (Haystack PR #11987).",
      "Fixed auto-variadic socket flag not reset on component removal in PipelineBase.remove_component (Haystack PR #12206).",
      "Corrected inverted isinstance check in PipelineBase.__eq__ that raised unhandled AssertionError when comparing to non-Pipeline types (Haystack PR #12387).",
      "Fixed AzureOpenAIChatGenerator.to_dict() crash when response_format is a plain dict by adding missing isinstance type guard before issubclass call (Haystack PR #12407).",
      "Corrected stopword removal and token boundary preservation in SemanticDoubleMergingSplitterNodeParser (LlamaIndex PR #22167).",
    ],
    experienceLinks: {
      github: "https://github.com/deepset-ai/haystack",
      website: "https://haystack.deepset.ai/",
    },
    experienceOrg: {
      link: "https://haystack.deepset.ai/",
      name: "Haystack & LlamaIndex",
      websiteDisplayName: "haystack.deepset.ai",
    },
    experienceStatus: {
      endAt: "Present",
      startAt: "Jun, 2026",
    },
    experienceTech: ["Python", "Haystack", "LlamaIndex", "Git", "Linux"],
    experienceTitle: "Open Source Contributor",
    orgDescription:
      "Core contributions to deepset-ai/Haystack and run-llama/LlamaIndex, the leading open-source orchestration frameworks for production LLM and RAG pipelines.",
    slug: "haystack-llamaindex-oss",
  },
  {
    category: "Edge AI / ML",
    experienceDescription: [
      "<u>Quantization Stability Audit:</u> Audited a 14,154-image wheat disease benchmark via MD5+pHash deduplication, eliminating 11.6% cross-split leakage; investigated quantization behavior across MobileNetV3-L, ResNet50, ConvNeXt-Tiny.",
      "<u>TensorRT Calibration:</u> Restored MobileNetV3 INT8 accuracy from 31.0% to 82.5% via entropy-calibrated TensorRT.",
      "<u>Edge Optimization:</u> Engineered HardSwish/LayerNorm deployment patches for stable FP16/INT8 inference on Jetson Nano; proposed Deployment Efficiency Score (DES) metric achieving 54.5 FPS real-time edge inference.",
    ],
    experienceLinks: {
      github: "https://github.com/rautaditya2606/wheat_detection",
      website: "https://github.com/rautaditya2606/wheat_detection",
    },
    experienceOrg: {
      link: "https://github.com/rautaditya2606/wheat_detection",
      name: "Research & Publications",
      websiteDisplayName: "preprint",
    },
    experienceStatus: {
      endAt: "Present",
      startAt: "Aug, 2024",
    },
    experienceTech: [
      "PyTorch",
      "TensorRT",
      "ONNX Runtime",
      "OpenCV",
      "Python",
      "Linux",
    ],
    experienceTitle: "Edge AI & ML Researcher",
    orgDescription:
      "Researching framework-dependent quantization stability, cross-split benchmark leakage elimination, and low-latency edge inference optimization on embedded devices like Jetson Nano.",
    slug: "agricultural-edge-ai-research",
  },
  {
    category: "Education",
    experienceDescription: [
      "5th Semester undergraduate student pursuing B.Tech in Computer Science and Engineering (AI & Analytics).",
      "Cumulative GPA: 7.88 / 10.",
      "Focusing on Machine Learning, Deep Learning, RAG architectures, and Distributed Systems.",
    ],
    experienceLinks: {
      website: "https://mituniversity.ac.in/",
    },
    experienceOrg: {
      link: "https://mituniversity.ac.in/",
      name: "MIT ADT University",
      websiteDisplayName: "mituniversity.ac.in",
    },
    experienceStatus: {
      endAt: "Jun, 2028",
      startAt: "Aug, 2024",
    },
    experienceTech: [
      "Python",
      "PyTorch",
      "Machine Learning",
      "Data Analytics",
      "SQL",
      "Linux",
    ],
    experienceTitle: "B.Tech. in CSE (AI & Analytics)",
    orgDescription:
      "MIT Art, Design and Technology University (MIT ADT), Pune — School of Computing.",
    slug: "mit-adt-university",
  },
] as const satisfies readonly Experience[];
