# Vercel Environment Variables Backup
Date: 2026-03-08

This file documents the required environment variables for the
Best-Meeting-Time project. Values are NOT stored here for security.
This list simply confirms what must exist in Vercel.

Required Variables

NEXT_PUBLIC_BASE_URL

NEWKV_REDIS_URL
NEWKV_KV_REST_API_TOKEN
NEWKV_KV_URL
NEWKV_KV_REST_API_READ_ONLY_TOKEN
NEWKV_KV_REST_API_URL

KV_REST_API_URL
KV_REST_API_TOKEN
KV_REST_API_READ_ONLY_TOKEN
KV_URL

REDIS_URL

STRIPE_WEBHOOK_SECRET
STRIPE_PRICE_ID
STRIPE_SECRET_KEY

Notes
- These variables must exist in Vercel for production to function.
- Do NOT store actual secret values in GitHub.
- If the project is rebuilt, recreate these variables in Vercel.
