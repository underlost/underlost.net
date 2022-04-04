---
guid: "239"
slug: "pincuisine"
title: 'PinCuisine'
description: "An internal food blog and menu website for Pinterest."
color: "#E60023"
image: "cover_pincuisine.jpg"
date: "2019-09-01"
keywords: ["pinterest", "wildern"]
tools_used: ["Sketch App", "Github", "Visual Studio Code",]
frameworks_used: ["WordPress", "Advanced Custom Fields", "PHP", "git", "SCSS", "Gulp", "ImageMagick", "Bootstrap"]
published: true
type: "work"
---

PinCusine was an internal website for Pinterest. The PinCusine doubled as both a food blog and cafeteria menu for their campuses throughout the world. The original site was built on Wix, but after experiencing growth in multiple campuses, the team was starting to run into a number of limitations for managing menus and blog posts.

## Challenge: Scaling Global Food Menus

Pinterest operates a number of cafeterias for their employees all across the world, similar to Google and other large tech companies. The only way for workers to know whats on the menu was to check out the PinCusine website, which needed to be updated weekly. This was done through a single post, with no consistency or guidelines. Items on the menu were not always accurate, and sometimes could not be swapped out on a timely manner.

## Solution: Building A New Menu System

I designed and built a custom food menu system that could be setup months in advance. Items could easily be added, and stored in the database to later recall if it was added to the menu again. Menu items could also have dietary notes added, and could also be flagged as vegan, gluten-free, and nutritional notes.

It also allowed the cafeteria staff to easily convert spreadsheets of meal planning into tables on the website. Menu items could also easily be swapped out in the event of dishes not being available for any reason. And unlike the previous Wix iteration, users can browse days head of time instead of day of.

## Challenge: A food blog that works with Pinterest

The other issue with publishing to Wix was that blog post recipes weren’t properly saved in a reliable format that could be read by Pinterest. Pinterest relies on structured schema data to display content in rich pins.  When a post was pinned, it was often times was missing important ingredient or instruction data.

## Solution: Generating structured Schema Data

Using a custom WordPress theme, I wrote a plugin that generated schema.org structured data based on data entered in custom fields. This insured that all recipe information was validated and translated into the correct format readable by Pinterest.
