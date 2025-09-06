# ai-voice-archiver-x

Prototype Chrome Extension for **AI-assisted voice archiving and
structuring**.\
Spoken input is captured, processed with GitHub Models API, and
transformed into structured logs (Markdown + JSON).\
This helps turn design thoughts and discussions into reusable artifacts.

------------------------------------------------------------------------

## Context

-   **Purpose**
    -   Capture spoken input and prevent it from being lost.
    -   Use AI (GitHub Models) to **structure raw speech** into reusable
        logs.
    -   Provide both Markdown and JSON outputs for easy review, sharing,
        or automation.
-   **Scope (PoC)**
    -   Chrome Extension (Manifest V3).
    -   Web Speech API for voice → text.
    -   GitHub Models Responses API for structuring.
    -   Popup UI for viewing Markdown / JSON results, with copy &
        download support.
-   **Out of Scope (for now)**
    -   Team integrations (Slack, Jira, Notion, etc.).
    -   Long-term storage of recordings.
    -   Polished UI/UX design.

------------------------------------------------------------------------

## Usage (PoC Phase)

1.  Clone this repository.\
2.  Open Chrome → Extensions → Enable **Developer mode** → **Load
    unpacked**.\
3.  Load this repo's folder.\
4.  Open popup and start/stop voice recording.\
5.  Enter your GitHub Models API key (per session, not saved).\
6.  View results in Markdown or JSON tab.\
7.  Copy or download the structured logs if needed.

------------------------------------------------------------------------

## Output Format

### JSON

``` json
{
  "topics": [{ "text": "..." }],
  "decisions": [{ "text": "..." }],
  "open_questions": [{ "text": "..." }],
  "actions": [{ "text": "..." }]
}
```

### Markdown

``` markdown
# Summary

## Topics
- ...

## Decisions
- ...

## Open Questions
- ...

## Actions
- ...
```

------------------------------------------------------------------------

## Security & Privacy

-   **No secrets are stored in this repo.**\
-   API key is entered manually each session (not persisted).\
-   `.gitignore` excludes secrets, logs, and recordings.\
-   Public repo policy:
    -   Use GitHub Secrets for CI/CD if needed.
    -   Secret scanning is enabled.
    -   Never commit `.env` or private config files.

------------------------------------------------------------------------

## Notes

-   Default locale is **Japanese (ja)**.  
-   i18n is prepared with `_locales/` so that English or other languages can be added easily.  
-   Forks or future extensions can localize by editing `messages.json`.  
-   Minimal PoC goal: **voice → structuring → display** loop.\
-   Future direction: integrations, richer UI, team workflows.\
-   License: MIT (see [LICENSE](./LICENSE))
