# The Zero-Code Portfolio Pipeline

A multi-agent development team that built, debugged, and deployed my portfolio website. **Not a single line of code in this repository was written by a human.** 

---

## The Origin Story

* **The Problem:** I wanted a personal portfolio website but didn’t want to make it the usual boring way so I made a planned to learn agentic AI and explore agentic workflows to do work for me(felt like the perfect test project to learn it), but running complex multi-agent reasoning loops on free API keys instantly triggers a wall of `429 Too Many Requests` rate limits.
* **The Solution:** I built an autonomous, hierarchical AI dev team running on zero-budget API routing. By intercepting agent traffic with a fallback proxy, the agents never lose their state when an API drops, they just switch brains mid-thought and keep coding.
* **Live Site:** Hosted and accessible at [shivakhanal.dpdns.org](https://shivakhanal.dpdns.org) *(utilizing a free domain from [DigitalPlatDev/FreeDomain](https://github.com/DigitalPlatDev/FreeDomain) to follow the Golden Rule-2)*
---

## The Golden Rules

* `0% Human Code` — 100% written, styled, and pushed by AI.
* `$0 Financial Budget` — Built strictly using free-tier API endpoints.
* `1 Interface` — I only speak to the Team Lead via terminal commands or sometimes via Telegram when I am on my phone away from laptop. The agents handle the rest.

---

## System Architecture

The workflow uses the [Hermes](https://github.com/NousResearch/hermes-agent) agent framework, divided into five highly specialized digital workers:

> **Team Lead**  
> Parses terminal prompts, manages the project backlog, assigns tasks, and handles Git orchestration (branching, merging).

> **Frontend Specialist**  
> Builds the static structure, handles responsive UI layout, and manages CSS styles.

> **Backend Specialist**  
> Structures project data, optimizes assets, and mocks client-side features.

> **Debugger**  
> Sanitizes code outputs, reads error logs, and fixes syntax or layout breaks before deployment.

> **Telegram Confirmation (The Kill-Switch)**  
> Direct-messages me a code diff before any GitHub push. The entire pipeline freezes until I tap approve.

```text
                       [ Human Operator ]
                               │
                               ▼ (Terminal Command or Telegram Chat)
                       ┌───────────────┐
                       │   Team Lead   │◄────────────────┐
                       └───────┬───────┘                 │
                               │                         │
         ┌─────────────────────┼─────────────────────┐   │
         │ (Assigns Tasks)     │ (Assigns Tasks)     │   │ (Fixes/Logs)
         ▼                     ▼                     ▼   │
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐  │
│    Frontend     │   │     Backend     │   │    Debugger     ├──┘
│   Specialist    │   │   Specialist    │   │     Agent       │
└────────┬────────┘   └────────┬────────┘   └────────┬────────┘
         │                     │                     │
         └─────────────────────┼─────────────────────┘
                               │ (Code Assembly)
                               ▼
                   ┌───────────────────────┐
                   │  Telegram Confirmer   │
                   └───────────┬───────────┘
                               │   (Human Approval)
                               ▼ 
                   [ GitHub Repo Deployment ]            
```
---

## High-Frequency Brain Swapping

To survive aggressive agentic rate limits, all LLM traffic routes through a [LiteLLM](https://github.com/BerriAI/litellm) proxy routing a rotating matrix of free models:

| Model Provider/Name | Role in Pipeline |
| :--- | :--- |
| `groq/llama-3.3-70b-versatile` | Speed and structural syntax parsing |
| `gemini/gemini-2.5-flash` | Deep context review |
| `mistral/codestral-latest` | Heavy-lifting code generation |
| `cerebras/llama3.1-70b` | Instantaneous logical checks |

If a model runs out of free context or hits a rate limit mid-loop, LiteLLM catches the error and silently routes the next token to a backup provider.

---

## Active Sandbox (Under Construction)

* **The Goal:** Absolute freedom from rate limits. I am currently setting up free open-source models inside a remote **Kaggle GPU environment** to serve as the ultimate, dedicated backend brain.
* **The Roadblock:** Currently wrestling with connection bottlenecks when bridging the local Hermes engine to the Kaggle container environment. 

---

## Ideas? Suggestions?

Got an idea for a feature or a workaround for the Kaggle pipeline connection? Open an issue or drop a suggestion! I'm completely open to structural feedback, clever automation tricks, or prompt optimizations.
