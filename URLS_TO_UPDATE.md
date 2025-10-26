# 🔗 URLs to Update

The component has been set up with placeholder URLs. Please update these with your actual links:

## 📝 Update These URLs

### 1. Twitter/X Link
**Location:** `components/ui/hero-ascii-one.tsx` (Line ~195)

**Current:**
```tsx
href="https://twitter.com"
```

**Replace with your actual Twitter/X URL:**
```tsx
href="https://twitter.com/your_oracle_handle"
// or
href="https://x.com/your_oracle_handle"
```

### 2. Betting App Link
**Location:** `components/ui/hero-ascii-one.tsx` (Line ~206)

**Current:**
```tsx
href="https://app.example.com"
```

**Replace with your actual app URL:**
```tsx
href="https://your-app-domain.com"
// or your internal route like:
href="/app"
// or external Solana app:
href="https://app.oracle-solana.io"
```

## 🎯 Quick Update Instructions

1. Open `components/ui/hero-ascii-one.tsx`
2. Find the "FOLLOW OUR X" button (~line 195)
3. Replace `https://twitter.com` with your Twitter/X URL
4. Find the "START BETTING" button (~line 206)
5. Replace `https://app.example.com` with your betting app URL
6. Save the file

## 📌 Tips

- Use full URLs with `https://` for external links
- Use relative paths like `/app` for internal routes
- Both buttons open in new tabs (`target="_blank"`)
- Security: `rel="noopener noreferrer"` is already included


