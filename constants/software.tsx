import { Icons } from "@/components/icons";

export interface SoftwareItem {
  categories: string[];
  href: string;
  icon: React.ReactNode;
  key: string;
  title: string;
}

export const SOFTWARE_ITEMS: SoftwareItem[] = [
  // Languages
  {
    categories: ["Languages"],
    href: "https://www.python.org",
    icon: <Icons.python />,
    key: "python",
    title: "Python",
  },
  {
    categories: ["Languages"],
    href: "https://isocpp.org",
    icon: <Icons.terminal />,
    key: "cpp",
    title: "C++",
  },
  {
    categories: ["Languages"],
    href: "https://www.postgresql.org",
    icon: <Icons.postgresql />,
    key: "sql",
    title: "SQL",
  },
  {
    categories: ["Languages"],
    href: "https://www.typescriptlang.org",
    icon: <Icons.ts />,
    key: "typescript",
    title: "TypeScript",
  },
  {
    categories: ["Languages"],
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <Icons.js />,
    key: "javascript",
    title: "JavaScript",
  },

  // GenAI / RAG
  {
    categories: ["GenAI & RAG"],
    href: "https://haystack.deepset.ai",
    icon: <Icons.haystack />,
    key: "haystack",
    title: "Haystack",
  },
  {
    categories: ["GenAI & RAG"],
    href: "https://www.llamaindex.ai",
    icon: <Icons.llamaindex />,
    key: "llamaindex",
    title: "LlamaIndex",
  },
  {
    categories: ["GenAI & RAG"],
    href: "https://www.langchain.com",
    icon: <Icons.langchain />,
    key: "langchain",
    title: "LangChain",
  },
  {
    categories: ["GenAI & RAG"],
    href: "https://weaviate.io",
    icon: <Icons.weaviate />,
    key: "weaviate",
    title: "Weaviate",
  },
  {
    categories: ["GenAI & RAG"],
    href: "https://qdrant.tech",
    icon: <Icons.qdrant />,
    key: "qdrant",
    title: "Qdrant",
  },
  {
    categories: ["GenAI & RAG"],
    href: "https://www.pinecone.io",
    icon: <Icons.pinecone />,
    key: "pinecone",
    title: "Pinecone",
  },
  {
    categories: ["GenAI & RAG"],
    href: "https://www.trychroma.com",
    icon: <Icons.chroma />,
    key: "chroma",
    title: "Chroma",
  },
  {
    categories: ["GenAI & RAG"],
    href: "https://openai.com",
    icon: <Icons.openai />,
    key: "openai",
    title: "OpenAI API",
  },
  {
    categories: ["GenAI & RAG"],
    href: "https://www.anthropic.com",
    icon: <Icons.anthropic />,
    key: "anthropic",
    title: "Anthropic API",
  },

  // Machine Learning & Deep Learning
  {
    categories: ["ML & Deep Learning"],
    href: "https://pytorch.org",
    icon: <Icons.pytorch />,
    key: "pytorch",
    title: "PyTorch",
  },
  {
    categories: ["ML & Deep Learning"],
    href: "https://onnxruntime.ai",
    icon: <Icons.terminal />,
    key: "onnxruntime",
    title: "ONNX Runtime",
  },
  {
    categories: ["ML & Deep Learning"],
    href: "https://developer.nvidia.com/tensorrt",
    icon: <Icons.terminal />,
    key: "tensorrt",
    title: "TensorRT",
  },
  {
    categories: ["ML & Deep Learning"],
    href: "https://huggingface.co",
    icon: <Icons.huggingface />,
    key: "huggingface",
    title: "Hugging Face",
  },
  {
    categories: ["ML & Deep Learning"],
    href: "https://scikit-learn.org",
    icon: <Icons.scikitlearn />,
    key: "scikitlearn",
    title: "Scikit-Learn",
  },
  {
    categories: ["ML & Deep Learning"],
    href: "https://lightgbm.readthedocs.io",
    icon: <Icons.terminal />,
    key: "lightgbm",
    title: "LightGBM",
  },
  {
    categories: ["ML & Deep Learning"],
    href: "https://xgboost.readthedocs.io",
    icon: <Icons.terminal />,
    key: "xgboost",
    title: "XGBoost",
  },
  {
    categories: ["ML & Deep Learning"],
    href: "https://opencv.org",
    icon: <Icons.opencv />,
    key: "opencv",
    title: "OpenCV",
  },

  // ML Systems & Backend
  {
    categories: ["Backend & Systems"],
    href: "https://kafka.apache.org",
    icon: <Icons.kafka />,
    key: "kafka",
    title: "Apache Kafka",
  },
  {
    categories: ["Languages", "Backend & Systems"],
    href: "https://www.rust-lang.org",
    icon: <Icons.rust />,
    key: "rust",
    title: "Rust",
  },
  {
    categories: ["Backend & Systems"],
    href: "https://fastapi.tiangolo.com",
    icon: <Icons.fastapi />,
    key: "fastapi",
    title: "FastAPI",
  },
  {
    categories: ["Backend & Systems"],
    href: "https://flask.palletsprojects.com",
    icon: <Icons.flask />,
    key: "flask",
    title: "Flask",
  },
  {
    categories: ["Backend & Systems"],
    href: "https://www.docker.com",
    icon: <Icons.docker />,
    key: "docker",
    title: "Docker",
  },
  {
    categories: ["Backend & Systems"],
    href: "https://www.postgresql.org",
    icon: <Icons.postgresql />,
    key: "postgresql",
    title: "PostgreSQL",
  },
  {
    categories: ["Backend & Systems"],
    href: "https://git-scm.com",
    icon: <Icons.git />,
    key: "git",
    title: "Git",
  },
  {
    categories: ["Backend & Systems"],
    href: "https://www.kernel.org",
    icon: <Icons.linux />,
    key: "linux",
    title: "Linux",
  },
  {
    categories: ["Backend & Systems"],
    href: "https://aws.amazon.com/ec2/",
    icon: <Icons.aws />,
    key: "aws",
    title: "AWS EC2",
  },

  // AI & Dev Tools
  {
    categories: ["Dev Tools"],
    href: "https://cursor.com",
    icon: <Icons.cursor />,
    key: "cursor",
    title: "Cursor",
  },
  {
    categories: ["Dev Tools"],
    href: "https://claude.com/product/claude-code",
    icon: <Icons.claude />,
    key: "claude",
    title: "Claude Code",
  },
  {
    categories: ["Dev Tools"],
    href: "https://antigravity.google",
    icon: <Icons.antigravity />,
    key: "antigravity",
    title: "Antigravity",
  },
  {
    categories: ["Dev Tools"],
    href: "https://render.com",
    icon: <Icons.terminal />,
    key: "render",
    title: "Render",
  },
  {
    categories: ["Dev Tools"],
    href: "https://hub.docker.com",
    icon: <Icons.docker />,
    key: "dockerhub",
    title: "DockerHub",
  },
];
