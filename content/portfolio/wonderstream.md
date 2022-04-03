---
guid: "203"
slug: "wonderstream"
title: 'Wonderstream'
description: "A livestreaming web app and platform written in Python, that also accepted cryptocurrency."
color: "#784AF7"
image: "cover_wonderstream.jpg"
date: "2018-09-01"
keywords: ["Livestreaming", "bitcoin", "wowza", "paas", "django", "python", "RESTful API"]
published: true
type: "work"
tools_used: ["Sketch App", "Github", "Wowza Cloud"]
frameworks_used: ["Python", "Django", "Django Rest Framework", "Gulp", "SCSS", "Git"]
timeline: "6+ months"
---


## Background

Wonderstream was a live-streaming service built to compete against services like Facebook Live and Youtube Live, focused more at creatives and film makers. What set Wonderstream apart from other services was the ability to have fully custom branded stream pages and even domains, allowing each stream to have its own look and feel.

Streams also had a number of unique features, including geofencing, paywalls, donation options, and even accepting cryptocurrency payment options, including bitcoin and Etherum.

I was brought on to help build and prototype the idea, as well as roll out new features as they were planned.

## Livestreaming

Livestreams could be done from any device, whether a phone, or professional equipment. We tested a number of encoding services including Wowza, JW Player, and self-hosted options. We eventually settled with Wowza’s cloud platform to integrate with their easy to use API.

## Twitter Integration

Wonderstream didn’t want to reinvent live chat. So instead, we looked at how other social media platforms were being used to communicate during major events. We chose to connect to twitter’s API, and pull tweets related to hashtags as they were published. Livestream authors had full control over what hashtags were used. We also built a dashboard to remove tweets that did not fit the conversation.

## API

Wonderstream was also developer-focused. They wanted other brands to choose how to interact with the platform. Using Django Rest Framework, we built an API to allow developers and other services to quickly and easily spin up new livestream instances with out even needing to interact with the website itself.

## Cryptocurrency payments

At the time, paying for services with cryptocurrency was still just a few years old. One of the goals of Wonderstream was to create a platform for anyone, from anywhere to stream. They didn’t want to restrict users based on any specific currency, so we took a look digital currency. Specifically, Bitcoin and Etherum.  Because of the volatility of almost all cryptocurrency, we chose to only focus on these two types to support and test with at first.

## Analytics Dashboard

After streaming events ended,  creators could view a custom dashboard we built, to measure engagement. For all livestreams, we captured a number of metrics, including:

* Number of concurrent users watching
* Length a user watched the stream
* Number of users that watched the recored stream after the event was over.
* Number of donations users made
* Basic text-only heat-map of where the user interacted most on the livestream page.

### Additional Features

Before the project was ultimately canceled, we built a number of other features for the platform as well:

#### Donations

Users watching could choose to donate either fixed or custom amounts to the streamer.

#### Paywalls

Besides accepting donations, live-streamers could choose to have a paywall for their streams. We offered Stripe integration to all accounts to collect payments however they chose.

#### oAuth

Users could login from a number of services, including Facebook, Twitter and Google

#### Geofencing

Live-streamers could control specifically what countries were, or were not allowed to view the stream. Often times, the live streams were broadcast from film festivals, and due to copyright restrictions, could not always be shown to a global audience.
