# Six Nations Fan Website

A web-based platform dedicated to fans of the Six Nations Championship, providing tournament information, team profiles, news, and fan interaction features.

---

## Overview

The Six Nations Fan Website covers the annual rugby union competition between **England, France, Ireland, Italy, Scotland, and Wales**. It is designed for fans who want a central hub for fixtures, results, standings, news, and community discussion.

---

## Features

- **Fixtures & Results** — View upcoming matches and past results, filterable by team and round
- **Standings** — Live tournament table with wins, losses, draws, points difference, and total points
- **Teams & Players** — Dedicated pages for each team including squad, coaching staff, and player statistics
- **News & Content** — Articles categorized by match previews, analysis, and team news
- **User Accounts** — Register, log in, set a favourite team, and personalise your experience
- **Comments & Community** — Comment on articles, edit your own posts, and report inappropriate content
- **Search** — Global search across teams, players, and articles
- **Admin Panel** — Content management for articles, fixtures, results, standings, and user roles

---

## User Types

| Role | Description |
|---|---|
| Visitor | Unregistered user browsing content |
| Registered User | Can comment and personalise their experience |
| Moderator | Reviews and manages user-generated content |
| Admin / Editor | Manages all site content and data |

---

## Non-Functional Requirements

| Requirement | Target |
|---|---|
| Page load time | < 2 seconds under normal conditions |
| Uptime | 99.5% during tournament periods |
| Accessibility | WCAG 2.1 compliant |
| Security | HTTPS, encrypted passwords, XSS/CSRF protection |
| Compatibility | Chrome, Safari, Firefox, Edge — desktop and mobile |

---

## Data Entities

Users · Teams · Players · Matches · Results · Standings · Articles · Comments

Data is sourced via admin input and optionally from third-party sports APIs.

---

## Out of Scope (Initial Release)

- Live video streaming
- Ticketing or e-commerce
- Real-time betting integrations

---

## Future Enhancements

- Live match tracking
- Fantasy league integration
- Polls and predictions
- Multi-language support
- Personalised dashboards
- Mobile app version

---

## Compliance

- GDPR compliant for all user data
- WCAG 2.1 accessibility standards
