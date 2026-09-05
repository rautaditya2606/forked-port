import { MailIcon } from "lucide-react";
import { Suspense } from "react";

import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/about/github-contributions";
import { IntroSection } from "@/components/about/intro-section";
import { Icons } from "@/components/icons";
import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { LINK } from "@/constants/links";
import { getGitHubContributions } from "@/lib/github/contributions";

const AboutSection = () => {
  const contributions = getGitHubContributions();

  return (
    <IntroSection>
      <div className="prose text-muted-foreground prose-p:my-2 dark:prose-invert max-w-full text-sm leading-6 font-normal">
        <p>
          GenAI Engineer Intern with 9 merged PRs to{" "}
          <AppLink
            className="inline-flex items-center gap-1 font-medium text-foreground"
            href="https://github.com/deepset-ai/haystack"
            target="_blank"
            eventName="external_link_click"
            eventProperties={{
              context: "hero",
              link_type: "external",
              title: "Haystack",
              url: "https://github.com/deepset-ai/haystack",
            }}
          >
            Haystack
          </AppLink>{" "}
          and{" "}
          <AppLink
            className="inline-flex items-center gap-1 font-medium text-foreground"
            href="https://github.com/run-llama/llama_index"
            target="_blank"
            eventName="external_link_click"
            eventProperties={{
              context: "hero",
              link_type: "external",
              title: "LlamaIndex",
              url: "https://github.com/run-llama/llama_index",
            }}
          >
            LlamaIndex
          </AppLink>
          ; building production RAG pipelines, LLM applications, and ML systems.
        </p>
        <p>
          Reduced RAG latency by 40%, token costs by 60%, and ingestion time
          from 70s to 27s in production. Full ML stack expertise across PyTorch,
          LightGBM, FastAPI, Docker, ONNX, and TensorRT &mdash; from model
          training through edge deployment on Jetson Nano.
        </p>
      </div>
      <Callout className="space-y-1 p-1">
        <Suspense fallback={<GitHubContributionsFallback />}>
          <GitHubContributions contributions={contributions} />
        </Suspense>
        <div className="flex flex-col gap-3 p-2">
          <p className="text-muted-foreground text-sm">
            Interested in collaborating or discussing GenAI &amp; ML systems?
            Feel free to reach out.
          </p>
          <div className="flex flex-row items-center gap-2">
            <Button
              nativeButton={false}
              render={
                <AppLink
                  href={LINK.LINKEDIN}
                  target="_blank"
                  eventName="schedule_meet_click"
                />
              }
            >
              <Icons.linkedin className="size-4" />
              Connect on LinkedIn
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <AppLink
                  href={`mailto:${LINK.EMAIL}`}
                  target="_blank"
                  eventName="send_email_click"
                />
              }
            >
              <MailIcon />
              Send an email
            </Button>
          </div>
        </div>
      </Callout>
    </IntroSection>
  );
};

export { AboutSection };
