# System Design Basics

System design can sound intimidating, but at the beginner-to-junior level it mostly means learning how to think about growth, tradeoffs, and failure points instead of only writing code for one screen.

## A Simple Way To Think

When someone asks you to design a system, walk through:

1. what users are trying to do
2. what data the system needs
3. which parts need to be fast
4. which parts may fail
5. how the system grows over time

## Common Building Blocks

### Caching

Caching stores frequently used data somewhere faster so the system does not have to recompute or refetch it every time.

Example:
- storing popular product data in memory
- using browser cache for static files

### CDN

A CDN, or content delivery network, stores static assets on servers closer to users so pages load faster around the world.

Good for:
- images
- CSS
- JavaScript bundles
- video and media delivery

### Load Balancing

A load balancer distributes incoming traffic across multiple servers instead of sending everything to one machine.

This helps with:
- higher traffic
- failover
- smoother scaling

### Databases

Databases store application data. At a simple level, you mainly need to think about:

- what data you store
- how often it changes
- how often you read it
- which relationships matter

### Queues

Queues let you move slower work out of the immediate user request path.

Examples:
- sending emails
- generating reports
- processing uploads

## A Small Example: Design A Blog Platform

Users need to:

- read posts
- sign in
- publish content
- search posts

A basic design might include:

- frontend app
- backend API
- database for users and posts
- CDN for images
- cache for popular posts
- queue for email notifications

## Tradeoff Thinking

There is rarely one perfect answer. Good system design often means choosing what matters most:

- speed vs simplicity
- consistency vs flexibility
- cost vs performance

## What Interviewers Want

At this stage, interviewers often care more about your thinking than about naming every advanced tool correctly.

They want to hear:

- clear assumptions
- user-focused priorities
- awareness of bottlenecks
- reasonable tradeoffs

## A Senior Dev Mindset

A senior developer does not start with the fanciest architecture. They start with the problem, identify likely bottlenecks, and only add complexity when there is a clear reason.
